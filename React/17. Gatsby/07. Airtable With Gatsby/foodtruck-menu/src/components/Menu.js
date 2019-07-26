import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Menu = () => {
    const data = useStaticQuery(graphql`
        query MenuQuery {
            sandwiches: allAirtable(
                filter: { table: { eq: "Sandwiches" } }
                sort: { fields: data___Price, order: DESC }
            ) {
                nodes {
                    data {
                        Name
                        Price
                        Description
                    }
                    recordId
                }
            }
        }
  `);

    return (
        <div>
            <h3>Sandwiches</h3>

            <ul>
                {data.sandwiches.nodes.map((item, i) => (
                <li key={item.recordId}>
                    <p>
                        {item.data.Name}, ${item.data.Price}
                    </p>
                    <p>{item.data.Description}</p>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;