const HeaderComponent = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Todo-App
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Todos
                </a>
              </li>
            </ul>
            <ul className="navbar-nav navbar-collapse  justify-content-end">
              <li class="nav-item">
                <a class="nav-link">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
