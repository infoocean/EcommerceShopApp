import React from "react";

function Userprofile() {
  return (
    <>
      <div class="container bootstrap snippets bootdey">
        <div class="row">
          <div class="profile-nav col-md-3">
            <div class="panel">
              <div class="user-heading round">
                <a href="#">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                  />
                </a>
                <h1>Camila Smith</h1>
                <p>deydey@theEmail.com</p>
              </div>
            </div>
          </div>
          <div class="profile-info col-md-9">
            <div class="panel">
              <div class="panel-body bio-graph-info">
                <h1>Bio Graph</h1>
                <div class="row">
                  <div class="bio-row">
                    <p>
                      <span>First Name </span>: Camila
                    </p>
                  </div>
                  <div class="bio-row">
                    <p>
                      <span>Last Name </span>: Smith
                    </p>
                  </div>
                  <div class="bio-row">
                    <p>
                      <span>Country </span>: Australia
                    </p>
                  </div>
                  <div class="bio-row">
                    <p>
                      <span>Birthday</span>: 13 July 1983
                    </p>
                  </div>
                  <div class="bio-row">
                    <p>
                      <span>Occupation </span>: UI Designer
                    </p>
                  </div>
                  <div class="bio-row">
                    <p>
                      <span>Email </span>: jsmith@flatlab.com
                    </p>
                  </div>
                  <div class="bio-row">
                    <p>
                      <span>Mobile </span>: (12) 03 4567890
                    </p>
                  </div>
                  <div class="bio-row">
                    <p>
                      <span>Phone </span>: 88 (02) 123456
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="py-2 header">
        <div class="container py-4">
          <div class="row">
            <div class="col-md-3">
              <div
                class="nav flex-column nav-pills nav-pills-custom"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  class="nav-link mb-3 p-3 shadow active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <i class="fa fa-user-circle-o mr-2"></i>
                  <span class="font-weight-bold small text-uppercase">
                    Personal information
                  </span>
                </a>

                <a
                  class="nav-link mb-3 p-3 shadow"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <i class="fa fa-calendar-minus-o mr-2"></i>
                  <span class="font-weight-bold small text-uppercase">
                    Bookings
                  </span>
                </a>
                <a
                  class="nav-link mb-3 p-3 shadow"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <i class="fa fa-star mr-2"></i>
                  <span class="font-weight-bold small text-uppercase">
                    Reviews
                  </span>
                </a>
                <a
                  class="nav-link mb-3 p-3 shadow"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <i class="fa fa-check mr-2"></i>
                  <span class="font-weight-bold small text-uppercase">
                    Confirm booking
                  </span>
                </a>
              </div>
            </div>
            <div class="col-md-9">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade shadow rounded bg-white show active p-5"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <h4 class="font-italic mb-4">Personal information</h4>
                  <p class="font-italic text-muted mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div
                  class="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <h4 class="font-italic mb-4">Bookings</h4>
                  <p class="font-italic text-muted mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div
                  class="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <h4 class="font-italic mb-4">Reviews</h4>
                  <p class="font-italic text-muted mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div
                  class="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <h4 class="font-italic mb-4">Confirm booking</h4>
                  <p class="font-italic text-muted mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Userprofile;
