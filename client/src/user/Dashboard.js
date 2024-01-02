import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { AuthContext } from "../context/auth";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery();

  return (
    <div columns={3}>
      <div className="page-title">
        <h1>Recent Posts</h1>
      </div>
      <div>
        {user && (
          <div>
            
          </div>
        )}
      </div>

      <div>
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          data.getPosts &&
          data.getPosts.map((post) => {
            return (
              <div key={post.id} style={{ marginBottom: 20 }}>
                
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Dashboard;
