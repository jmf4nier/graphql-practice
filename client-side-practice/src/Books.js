import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Courses = () => (
    <Query query={gql` 
    {
        books {
          title
          author
        }
      }
    `}>
        {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error:</p>;
           
            return data.books.map(({title, author}) =>(
                <div >
                    <p>{`${title} by ${author}`}</p>
                </div>
            ))
        }}
    </Query>
)
export default Courses;