import React, { useState } from "react";
import axios from "axios";
import Alert, { AlertProps, alertWord } from "../Alert/Alert";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./ImageUp.module.css";

function GraySlice() {
  /* state */
  const [file, setFile] = useState<File | null>(null); //文件选择
  const [input1, setInput1] = useState<string>(""); //输入值1
  const [input2, setInput2] = useState<string>(""); //输入值2
  const [processedPath, setProcessedPath] = useState<string>(""); //处理后文件url
  const [alertTag, setAlertTag] = useState<AlertProps["state"]>("primary"); //alert类型
  const [alertVisible, setAlertVisibility] = useState<boolean>(false); //alert可见性

  /* handle function */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  }; //选择文件

  //输入的值
  const handleInput1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  };
  const handleInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(e.target.value);
  };

  const handleUpload = async () => {
    if (!file || !input1) {
      setAlertTag("warning");
      setAlertVisibility(true);
      return;
    }

    //传参
    const formData = new FormData();
    let params: Record<string, string | Blob> = {
      image: file,
      min: input1,
      max: input2,
      fid: "6",
    };
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        formData.append(key, params[key]);
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/process_image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
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
        <h4>灰度级切片</h4>
        <div className="mb-3">
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
          <Input tips="请输入切片的最小像素(整数)" onInput={handleInput1} />
          <br />
          <Input tips="请输入切片的最大像素(整数)" onInput={handleInput2} />
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

export default GraySlice;
