import React from "react";
import "./Main.css";

const Main = (props) => {
  const { activeNote } = props;

  const onEditNote = () => {};
  if (!activeNote) {
    return (
      <div className="no-active-note">アクティブノートが選択されていません</div>
    );
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id=""
          placeholder="ノート内容を記入"
          value={activeNote.content}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <div className="preview-title">
          <h1 className="preview-title">{activeNote.title}</h1>
          <div className="markdown-preview">{activeNote.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
