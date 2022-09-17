import React, { useState, useEffect } from "react";

const Useeffect = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.tvmaze.com/shows/1/cast");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>List Of Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((currElem) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={currElem.person.image.medium}
                        className="rounded"
                        width="155"
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">
                        {currElem.person.name}
                      </h4>
                      {/* <span className="text-left">{type }</span> */}
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Country</span>

                          <span className="number1">
                            {currElem.person.country.name}
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Birthday</span>

                          <span className="number2">
                            {currElem.person.birthday}
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Gender</span>

                          <span className="number3">
                            {" "}
                            {currElem.person.gender}
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Famous Role</span>
                          <span className="number3">
                            {" "}
                            {currElem.character.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Useeffect;
