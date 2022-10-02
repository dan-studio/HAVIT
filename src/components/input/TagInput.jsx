import { PlusOutlined } from "@ant-design/icons";
import { Input, Tag, Tooltip } from "antd";
import React, { useRef } from "react";
import { useEffect } from "react";
const TagInput = ({name,value,onChange}) => {
    const [inputVisible, setInputVisible] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [editInputIndex, setEditInputIndex] = React.useState(-1);
    const [editInputValue, setEditInputValue] = React.useState("");
    const inputRef = useRef(null);
    const editInputRef = useRef(null);
    useEffect(()=>{
        onChange({name, value});
    })
    React.useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);
    React.useEffect(() => {
        editInputRef.current?.focus();
    }, [inputValue]);
    const handleClose = (removedTag) => {
        const newTags = value?.filter((tag) => tag !== removedTag);
        value = newTags;
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && value?.indexOf(inputValue) === -1) {
            onChange({name, value:[...value, inputValue]});
        }

        setInputVisible(false);
        setInputValue("");
    };

    const handleEditInputChange = (e) => {
        setEditInputValue(e.target.value);
    };

    const handleEditInputConfirm = () => {
        const newTags = [...value];
        newTags[editInputIndex] = editInputValue;
        value = newTags;
        setEditInputIndex(-1);
        setInputValue("");
    };
    return (
        <>
            {value?.map((tag, index) => {
                if (editInputIndex === index) {
                    return (
                        <Input
                            ref={editInputRef}
                            key={tag}
                            size="small"
                            style={{ width: "28px" , borderRadius:"2rem"}}
                            className="tag-input"
                            value={editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm}
                        />
                    );
                }

                const isLongTag = tag.length > 3;
                const tagElem = (
                    <Tag
                        className="edit-tag"
                        key={tag}
                        closable={true}
                        onClose={() => handleClose(tag)}
                    >
                        <span
                            onDoubleClick={(e) => {
                                if (index !== 0) {
                                    setEditInputIndex(index);
                                    setEditInputValue(tag);
                                    e.preventDefault();
                                }
                            }}
                        >
                            {isLongTag ? `${tag.slice(0, 3)}..` : tag}
                        </span>
                    </Tag>
                );
                return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                        {tagElem}
                    </Tooltip>
                ) : (
                    tagElem
                );
            })}
            {inputVisible && (
                <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    className="tag-input"
                    style={{ width: "58px" }}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            )}
            {!inputVisible && (
                <Tag className="site-tag-plus" onClick={showInput}>
                    <PlusOutlined />
                </Tag>
            )}
        </>
    );
};

export default React.memo(TagInput);
