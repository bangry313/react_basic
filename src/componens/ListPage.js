const ListPage = function(){
  
  const students = ["월요일", "화용일", "수요일", "목요일"];

  return (
    <div>
      <ul>
        {students.map((student, index) => {
          return <li key={index}>{student}</li>
        })}
      </ul>
    </div>
  );
}

export default ListPage;