import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { useEffect, useState } from 'react';
import { uploadImage } from '@apis/upload';
import { fileUrlHost } from '@apis/config';

// 알아서 찾아보시는걸로
const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = error => reject(error);
  });

const Uploader = props => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(props?.value);
  useEffect(()=>{
    setImageUrl(props.value);
  },[props?.value])
  const handlePreview = number => {
    setImageUrl(number);
    setLoading(true);
  };
  const handleChange = ({ file: newFile }) => {
    if(newFile.status !== "uploading"){
      uploadImage(newFile.originFileObj).then((res)=>{
        handlePreview(res.data);
        if(props?.onChange)props?.onChange(res.data);
      })
    }
  };

  const uploadButton = (
    !props?.children ? (<div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}>
        Upload
      </div>
    </div>) : (props.children)
  );
  return (
    <div style={{display:'flex'}}>
      <Upload
        name='avatar'
        accept='image/*'
        listType='picture-card'
        action={""}
        className={props?.className ? props.className + ' avatar-uploader' : 'avatar-uploader'}
        showUploadList={false}
        onChange={handleChange}>
          
        {imageUrl ? (
          <img
            src={fileUrlHost(imageUrl)}
            alt='avatar'
            style={{objectFit:"cover"}}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};

export default Uploader;
