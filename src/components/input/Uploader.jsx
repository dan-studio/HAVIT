import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { useState } from 'react';

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
    handlePreview(newFile);
    setFileList(newFileList);
  };

  const uploadButton = (
    <div style={{ background: 'red' }}>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}>
        Upload
      </div>
    </div>
  );
  return (
    <div style={{display:'flex'}}>
      <Upload
        name='avatar'
        listType='picture-card'
        className={props?.className ? props.className + ' avatar-uploader' : 'avatar-uploader'}
        showUploadList={false}
        fileList={fileList}
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        onChange={handleChange}
        style={{
          width: '92px',
          height: '92px',
          background:'blue'
        }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt='avatar'
            style={{
              width: '92px',
              height: '92px',
              objectFit: 'cover',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};

export default Uploader;
