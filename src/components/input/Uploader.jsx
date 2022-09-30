import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { useState } from 'react';
import { uploadImage } from '@apis/auth/upload';

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
  const [imageUrl, setImageUrl] = useState();
  const [fileList, setFileList] = useState([]);
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setImageUrl(file.url || file.preview);
    setLoading(true);
  };
  const handleChange = ({ file: newFile, fileList: newFileList }) => {
    console.log(newFile);
    handlePreview(newFile);
    setFileList(newFileList);
    uploadImage(newFile).then((res)=>{
      console.log(res);
    })
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
        className={props?.className ? props.className + ' avatar-uploader' : 'avatar-uploader'}
        showUploadList={false}
        fileList={fileList}
        onChange={handleChange}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt='avatar'
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};

export default Uploader;
