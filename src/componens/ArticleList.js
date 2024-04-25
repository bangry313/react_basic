import { useEffect, useRef, useState } from "react";
import httpRequest from "../http";

const ArticleList = function () {
  const [articles, setAticles] = useState([
    { id: 1, title: '점심먹으러 갑시다', writer: '가을님1' },
    { id: 2, title: '점심먹으러 갑시다', writer: '가을님2' },
    { id: 3, title: '점심먹으러 갑시다', writer: '가을님3' },
    { id: 4, title: '점심먹으러 갑시다', writer: '가을님4' },
    { id: 5, title: '점심먹으러 갑시다', writer: '가을님5' },
  ]);
  const [title, setTitle] = useState("");

  const articleList = articles.map(article => {
    return <tr key={article.id}>
             <td>{article.title}</td>
             <td>{article.writer}</td>
             <td><button value={article.id} onClick={event => {handleArticleRemove(event);}}>삭제</button></td>
           </tr>;
  });

  // 게시글제목 변경 이벤트
  const handleTitleChange = function(event) {
    setTitle(event.target.value);
  }
  
  // 게시글 등록 이벤트 처리
  const handleArticleAdd = function(event) {
    const newArticle = { id: ArticleList.articleId++, title: title, writer: '방그리' };
    // const newArticles = articles.concat(newArticle);
    const newArticles = [...articles, newArticle];
    setAticles(newArticles);
    setTitle("");
  }

  // 게시글 삭제 이벤트 처리
  const handleArticleRemove = function(event){
    const newArticles = articles.filter(article => article.id !== parseInt(event.target.value));
    setAticles(newArticles);
  }

  return (
    <>
      <h2>게시글 목록</h2>

      <input type="text" value={title} onChange={handleTitleChange}/>
      <button onClick={handleArticleAdd}>게시글 등록</button>

      <table border="1">
        <tbody>
          {articleList}
        </tbody>
      </table>
    </>
  );
}

ArticleList.articleId = 6;


export default ArticleList;