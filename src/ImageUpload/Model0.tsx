/**
 * Model0：模板组件，需0个输入参数的组件
 */

import React, { useState } from "react";
import axios from "axios";
import Alert, { AlertProps, alertWord } from "../Alert/Alert";
import Button from "../Button/Button";
import styles from "./ImageUp.module.css";

interface props {
  head: string;
  id: string;
}

function Model0({ head, id }: props) {
  /* state */
  const [file, setFile] = useState<File | null>(null); //文件选择
  const [processedPath, setProcessedPath] = useState<string>(""); //处理后文件url
  const [alertTag, setAlertTag] = useState<AlertProps["state"]>("primary"); //alert类型
  const [alertVisible, setAlertVisibility] = useState<boolean>(false); //alert可见性

  /* handle function */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  }; //选择文件

  const handleUpload = async () => {
    if (!file) {
      setAlertTag("warning");
      setAlertVisibility(true);
      return;
    }

    const formData = new FormData();
    let params: Record<string, string | Blob> = {
      image: file,
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
        <h4>操作</h4>
        <div className={styles.menu}>
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

export default Model0;
