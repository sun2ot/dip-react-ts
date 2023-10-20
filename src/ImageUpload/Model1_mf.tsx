/**
 * Model1_mf：模板组件，需1个输入参数、多文件上传的组件
 * mf = multiple file
 */

import React, { useState } from "react";
import axios from "axios";
import Alert, { AlertProps, alertWord } from "../Alert/Alert";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./ImageUp.module.css";

interface props {
  head: string;
  tips: string;
  id: string;
}

function Model1_mf({ head, tips, id }: props) {
  /* state */
  const [files, setFiles] = useState<FileList | null>(null); //多文件选择
  const [input1, setInput1] = useState<string>(""); //输入值1
  const [processedPath, setProcessedPath] = useState<string>(""); //处理后文件url
  const [alertTag, setAlertTag] = useState<AlertProps["state"]>("primary"); //alert类型
  const [alertVisible, setAlertVisibility] = useState<boolean>(false); //alert可见性

  /* handle function */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length == 2) {
      setFiles(e.target.files);
    }
  }; //选择文件

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  }; //输入的值

  const handleUpload = async () => {
    if (!files || !input1) {
      setAlertTag("warning");
      setAlertVisibility(true);
      return;
    }

    const formData = new FormData();
    let params: Record<string, string | Blob> = {
      image: files[0],
      image2: files[1],
      input1: input1,
      fid: id,
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
        <h4>{head}</h4>
        <div className="mb-3">
          {/* 上传多上图片 */}
          <input
            className="form-control"
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </div>

        {files ? (
          <div>
            <img
              src={URL.createObjectURL(files[0])}
              alt="File"
              className={styles.imagePreview}
            />
            <img
              src={URL.createObjectURL(files[1])}
              alt="File"
              className={styles.imagePreview}
            />
          </div>
        ) : null}
      </div>

      {/* 右侧区域 */}
      <div className={styles.rightArea}>
        <h4>参数</h4>
        <div className={styles.menu}>
          <Input tips={tips} onInput={handleInput} />
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

export default Model1_mf;
