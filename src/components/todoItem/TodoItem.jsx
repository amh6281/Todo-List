import React, { useState } from "react";
import "./todoItem.scss";

const TodoItem = ({ content, id, onDelete, onEdit, checked }) => {
  const [edit, setEdit] = useState(false); // 수정 모드 여부
  const [editContent, setEditContent] = useState(content); // 수정된 내용

  const handleChecked = () => {
    // 수정된 todoItem의 editContent, isCompleted를 부모 컴포넌트로 전달
    onEdit(id, editContent, !checked);
  };

  const handleDelete = () => {
    if (
      window.confirm(
        "할 일을 삭제하시겠습니까?\n삭제 한 할 일은 복구할 수 없습니다."
      )
    ) {
      onDelete(id);
    }
  };

  const handleSave = () => {
    // 버튼 클릭시 수정된 내용을 부모로 전달
    // 부모 컴포넌트에서 서버에 수정을 요청하고 할 일 목록을 업데이트
    onEdit(id, editContent, checked);
    // 수정 모드를 해제
    setEdit(false);
  };

  const handleCancel = () => {
    // 취소 버튼을 누르면 수정 모드를 해제하고 기존 내용으로 되돌린다.
    setEdit(false);
    setEditContent(content);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <div className={`todoItem ${checked ? "checked" : ""}`}>
      <div className="itemWrapper">
        <input type="checkbox" checked={checked} onChange={handleChecked} />
        {edit ? (
          // 수정 모드일 때 텍스트 필드
          <input
            type="text"
            value={editContent}
            maxLength="50"
            onChange={(e) => setEditContent(e.target.value)}
          />
        ) : (
          // 수정 모드가 아닐 때는 텍스트
          <p>{content}</p>
        )}
        {edit ? (
          <>
            {/* 수정 모드일 때는 수정 버튼이 "저장", 삭제 버튼이 "취소" */}
            <button onClick={handleSave}>저장</button>
            <button onClick={handleCancel}>취소</button>
          </>
        ) : (
          <>
            {/* 수정 모드가 아닐 때는 "수정", "삭제" */}
            <button onClick={handleEdit}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
