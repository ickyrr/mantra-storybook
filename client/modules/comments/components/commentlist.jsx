import React from 'react';
import moment from 'moment';

class Commentlist extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
      <ul className="commentList">

            {this.props.comments.map(function (item, dataKey) {

                return (
                    <li key={dataKey}>

                        <div className="commentText">
                          <p>{item.message}</p>
                          <span className="date sub-text">{moment(item.createdAt).calendar()}</span>
                        </div>

                    </li>
                  )
              })
            }

      </ul>
      </div>
    );
  }
}

export default Commentlist;
