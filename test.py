 header {
      position: relative;
      width: 100%;
      z-index: 1000;
  }

  .top-bar {
      display: none;
  }

  .logo-right {
      text-decoration: none;
      font-size: 20px;
      color: #0056d2;
      font-weight: 600;
  }

  .hamburger {
      font-size: 28px;
      background: none;
      border: none;
      color: #333;
      cursor: pointer;
      display: none;
  }

  nav {
      background-color: #ffffff;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .logo {
      text-decoration: none;
      font-size: 24px;
      color: #0056d2;
      font-weight: 600;
      padding: 15px;
      margin-top: 5px;
      cursor: pointer;
  }

  .nav-left,
  .nav-right {
      display: flex;
      align-items: center;
      gap: 15px;
  }

  .nav-links {
      display: flex;
      align-items: center;
      gap: 15px;
  }

  .nav-links a {
      color: #5b6780;
      text-decoration: none;
      margin: 0 15px;
      font-size: 14px;
      font-weight: bold;
  }

  .nav-links a:hover {
      text-decoration: none;
      color: #0056d2;
  }

  .dropdown {
      position: relative;
  }

  .dropdown-toggle {
      background-color: #ffffff;
      color: #0056d2;
      border: 1.5px solid #0056d2;
      font-size: 16px;
      cursor: pointer;
      padding: 8px 16px;
      border-radius: 5px;
      font-weight: bold;
  }

  .dropdown-toggle:hover {
      background-color: #e3eeff;
      text-decoration: none;
  }

  .dropdown-menu {
      display: none;
      position: absolute;
      min-width: 800px;
      z-index: 1;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .dropdown-menu a {
      color: #0f1114;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      width: 250px;
  }

  .dropdown-menu a:hover {
      background-color: #f5f5f5;
      color: #0056d2;
      text-decoration: underline;
  }

  .dropdown:hover .dropdown-menu {
      display: block;
  }

  .search-bar {
      border: 1.5px solid #0056d2;
      display: flex;
      align-items: center;
      border-radius: 50px;
      padding: 0px 20px;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
      background-color: #ffffff;
  }

  .search-bar input {
      padding: 10px;
      border: none;
      border-radius: 20px;
      width: 300px;
      outline: none;
      font-size: 16px;
      font-weight: 600;
  }

  .search-bar button {
      background-color: #e3eeff;
      border: none;
      padding: 5px;
      margin-left: 10px;
      cursor: pointer;
      border-radius: 50%;
  }

  .join-btn {
      background-color: #ffffff;
      color: #0056d2;
      border: none;
      padding: 8px 12px;
      border-radius: 5px;
      cursor: pointer;
      border: 1.5px solid #0056d2;
      font-size: 16px;
      font-weight: bold;
  }

  .join-btn:hover {
      background-color: #e3eeff;
      text-decoration: none;
  }

  .mobile-sidebar {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1001;
      top: 0;
      left: 0;
      background-color: #fff;
      overflow-x: hidden;
      transition: 0.3s;
      padding-top: 60px;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  }

  .mobile-sidebar a {
      display: block;
      padding: 12px 24px;
      text-decoration: none;
      font-size: 18px;
      color: #333;
      font-weight: 600;
  }

  .mobile-sidebar .closebtn {
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 30px;
      text-decoration: none;
      color: #000;
  }

  @media screen and (max-width: 768px) {
      .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: #ffffff;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      #navbar {
          display: none;
      }

      .hamburger {
          display: block;
      }

      .logo-right {
          display: inline-block;
      }
  }*/