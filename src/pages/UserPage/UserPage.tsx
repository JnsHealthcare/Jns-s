import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Profile from './Profile/Profile';
import { API } from '../../config/config';
import getToken from '../../utils/getToken';
import PostList from '../../components/PostList/PostList';

const UserPage = () => {
  const [data, setData] = useState<any>([]);
  console.log(data);
  const token = getToken('TOKEN') || '';
  console.log(token);

  useEffect(() => {
    fetch(`${API.myPage}?accountId=${''}`, {
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Container>
      <Section width={400}>
        <Profile userdata={data} />
      </Section>
      <Section width={520}>
        {data.posts && data.posts.length > 0 ? (
          data.posts.map((data: any) => (
            <PostList
              key={data._id}
              createdAt={data.createdAt}
              views={data.views}
              postId={data.postId}
              title={data.title}
              name={data.name}
              likes={data.likes}
              // type="userpage"
            />
          ))
        ) : (
          <p>No posts found</p>
        )}
      </Section>
    </Container>
  );
};

export default UserPage;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  margin: 50px auto;
  background-color: #f9fafc;
  border-radius: 8px;
  box-shadow: 0 0 5px #f1f4f7;
`;
const Section = styled.section<{ width: number }>`
  margin: 10px;
  padding: 30px 10px;
  width: ${(props) => props.width}px;
  height: max-content;
  background-color: #fff;
  border: 2px solid #40bc91;
  border-radius: 6px;
  box-shadow: 0 0 2px #40bc91;
`;
