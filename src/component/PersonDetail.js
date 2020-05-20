import React, { Component } from "react";
import { personDetail } from "../action";
import { connect } from "react-redux";
import PersonDetailAlbum from "./PersonDetailAlbum";
export class PersonDetail extends Component {
  componentDidMount() {
    this.props.personDetail(this.props.match.params.name);
  }
  render() {
    return (
      <div>
        {this.props.person &&
          this.props.person.map((p) => {
            return (
              <div key={p.id}>
                <div className="detailProfilePicContainer">
                  <img
                    src={`Albums/${p.name}/${p.profile_pic}.jpeg`}
                    className="detailProfilePic"
                    alt=""
                  />
                </div>
                <div className="detailRightSide">
                  <div className="nameAndFollower">
                    <h1>{p.profile_name} </h1>
                    <button className="button">Follow</button>
                    <button className="button">Message</button>
                  </div>

                  <div className="followerAndFollowing">
                    <h1>
                      {p.followers}
                      <span>Followers</span>
                    </h1>
                    <h1>
                      {p.following}
                      <span>Following</span>{" "}
                    </h1>
                  </div>

                  <div className="bio">
                    <h1>About</h1>
                    <p>{p.bio}</p>
                  </div>
                </div>
                <div>
                  <PersonDetailAlbum
                    photos={p.albums}
                    name={p.name}
                    className="detailAlbumPic"
                  />
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    person: state.people.personDetail,
  };
};

export default connect(mapStateToProps, { personDetail })(PersonDetail);
