const UserList = ({ userData }) => {
  return (
    <>
      <ul className="goal-list">
        {
            userData.map(data => {
              return  <li id={data.id}>{data.name} ( {data.age})</li>
            })
        }
      </ul>
    </>
  );
};

export default UserList;
