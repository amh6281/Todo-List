# 프로젝트 명: Todo List

프로젝트는 Todo List를 관리하는 웹 애플리케이션으로, 사용자가 할 일 목록을 최대 10개까지 추가하고 관리할 수 있습니다.

## 프로젝트 구조 소개

```
Todo-List/
  ├── src/
  │    ├── components/
  │    │    ├── Header.js
  │    │    ├── TodoForm.js
  │    │    └── TodoList.js
  │    ├── pages/
  │    │    └── Home.js
  │    └── index.js
  ├── public/
  │
  └── README.md
```

- `src/`: 프로젝트의 모든 소스 코드가 들어 있는 디렉토리입니다.
  - `components/`: 재사용 가능한 컴포넌트들을 포함하는 디렉토리입니다.
    - `Header.js`: Todo List의 상단에 위치하는 헤더 컴포넌트입니다.
    - `TodoForm.js`: 새로운 Todo 항목을 추가하는 폼 컴포넌트입니다.
    - `TodoList.js`: Todo 항목들을 보여주는 리스트 컴포넌트입니다.
  - `pages/`: 각 페이지의 컴포넌트들을 포함하는 디렉토리입니다.
    - `Home.js`: Todo List의 메인 페이지 컴포넌트입니다.
  - `index.js`: ReactDOM.render()를 호출하여 App 컴포넌트를 렌더링합니다.

## 구현 방법에 대한 설명

- 프로젝트는 React.js 라이브러리를 활용하여 구현되었습니다. 사용자는 TodoForm 컴포넌트를 통해 새로운 할 일을 추가하고, TodoList 컴포넌트에서 모든 할 일 목록을 확인하고 관리할 수 있습니다.

- 새로운 할 일을 추가할 때는 TodoForm 컴포넌트에서 입력한 내용을 상태로 관리하고, 사용자가 삭제 또는 완료 처리를 할 때에는 해당 항목의 상태를 업데이트하여 적용합니다.

## 개발 환경

- OS: Windows 10
- IDE: Visual Studio Code
- 언어: JavaScript (ES6+)
- 프레임워크: React.js
- 빌드 도구: Vite
- 스타일 시트: SCSS
- 패키지 매니저: yarn

## 빌드 & 실행 방법

1. 프로젝트를 클론하거나 ZIP 파일 다운로드
2. 터미널에서 프로젝트 디렉토리로 이동
3. 필요한 패키지들을 설치: `npm install` or `yarn`
4. 애플리케이션을 실행: `npm run dev` or `yarn run dev`
5. 웹 브라우저에서 `http://localhost:5173`으로 접속하여 Todo List를 확인

## 부가설명

- TodoForm의 debounce 구현

1. debounceInput State 생성
2. handleChange 함수를 통해 setDebounceInput 값 업데이트
3. App.jsx에서 props로 받은 input을 업데이트하기 전 500ms 지연 수행
