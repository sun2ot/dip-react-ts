import React, { useState } from "react";
import axios from "axios";
import Alert, { AlertProps, alertWord } from "../Alert/Alert";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./ImageUp.module.css";

function LogTrans() {
  /* state */
  const [file, setFile] = useState<File | null>(null); //文件选择
  const [input1, setInput1] = useState<string>(""); //输入值1
  const [processedPath, setProcessedPath] = useState<string>(""); //处理后文件url
  const [alertTag, setAlertTag] = useState<AlertProps["state"]>("primary"); //alert类型
  const [alertVisible, setAlertVisibility] = useState<boolean>(false); //alert可见性

  /* handle function */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
    //为什么写在这里会报错？因为file可能为null，因此过不了ts的类型检查
    //但写在return部分，因为有三元运算符检测，因此可以保证file不为空
    //const imageUrl = URL.createObjectURL(file)
  }; //选择文件

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  }; //输入的值

  const handleUpload = async () => {
    if (!file || !input1) {
      setAlertTag("warning");
      setAlertVisibility(true);
      return;
    }

    const formData = new FormData();
    let params: Record<string, string | Blob> = {
      image: file,
      c: input1,
      fid: "3",
    };
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        // formData.append()的第二个参数只能为 string | Blob
        formData.append(key, params[key]);
      }
    }
    //如果不希望量化参数通过?key=value的形式传递，可以继续formData.append()
    try {
      const response = await axios.post(
        "http://localhost:5000/process_image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          // params: {
          //   levels: selectedLevel, // 将选择的量化等级作为参数发送到后端
          // },
        }
      );
      console.log("Upload successfully", response.data);
      setAlertTag("success");
      setProcessedPath(response.data.save_path);
    } catch (error) {
      console.error("Upload failed", error);
      setAlertTag("danger");
    }
    setAlertVisibility(true);
  }; //上传按钮

  return (
    <div className={styles.container}>
      {/* 左侧区域 */}
      <div className={styles.leftArea}>
        <h4>对数变换</h4>
        <div className="mb-3">
          {/* <label htmlFor="formFile" className="form-label" /> */}
          <input
            className="form-control"
            type="file"
            onChange={handleFileChange}
          />
        </div>

        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="File"
            className={styles.imagePreview}
          />
        ) : null}
      </div>

      {/* 右侧区域 */}
      <div className={styles.rightArea}>
        <h4>参数</h4>
        <div className={styles.menu}>
          <Input tips="请输入c值" onInput={handleInput} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button children="上传" onClick={handleUpload} />
        </div>
        {processedPath ? (
          <img src={processedPath} alt="File" className={styles.imagePreview} />
        ) : null}
      </div>

      {/* alert */}
      <div className={styles.alertContainer}>
        {alertVisible && (
          <Alert
            children={alertWord[alertTag]}
            state={alertTag}
            onClose={() => setAlertVisibility(false)}
          />
        )}
      </div>
    </div>
  );
}

export default LogTrans;
