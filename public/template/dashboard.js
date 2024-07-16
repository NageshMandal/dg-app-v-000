export const dashboardTemplate = `
<style>
        .dashboard-card {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 20px;
            text-align: center;
            background: #f8f9fa;
        }
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
        }
        .dashboard-header img {
            width: 54px;
            height: auto;
        }
    </style>


<div class="container mt-4">
    <div class="dashboard-header">
        <div class="d-flex align-items-center">
            <h1 class="ml-3">Welcome...</h1>
        </div>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Bronzwik's Home
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
    </div>
    
    <div class="row mt-4">
        <div class="col-md-3">
            <div class="dashboard-card">
                <h5>My Open Deals</h5>
                <p>0</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="dashboard-card">
                <h5>My Untouched Deals</h5>
                <p>0</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="dashboard-card">
                <h5>My Calls Today</h5>
                <p>0</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="dashboard-card">
                <h5>My Leads</h5>
                <p>0</p>
            </div>
        </div>
    </div>
</div>





  
  <div class="dashboard" id="dasboard">
    <div class="container mt-5">
      <h2>Open Tickets</h2>
      <div class="d-flex mb-3">
          
          <a href="#" class="ml-auto nav-feature"><i class="fas fa-filter"></i> Filter</a>
          <a href="#" class="nav-feature"><i class="fas fa-sort"></i> Sort</a>
          <a href="#" class="nav-feature"><i class="fas fa-search"></i></a>
      </div>
      <table class="table table-bordered">
          <thead class="thead-light">
          <tr>
              <th>Subject</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Related To</th>
              <th>Contact Name</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>Register for upcoming CRM Webinars</td>
              <td>14/07/2024</td>
              <td>Not Started</td>
              <td>Low</td>
              <td><i class="fas fa-building"></i> King (Sample)</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Kris Marrier"> Kris Marrier (Sample)</td>
          </tr>
          <tr>
              <td>Refer CRM Videos</td>
              <td>16/07/2024</td>
              <td>In Progress</td>
              <td>Normal</td>
              <td><i class="fas fa-briefcase"></i> Morlong Associates</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Mitsue Tollner"> Mitsue Tollner (Sample)</td>
          </tr>
          <tr>
              <td>Competitor Comparison Document</td>
              <td>12/07/2024</td>
              <td>Not Started</td>
              <td>Highest</td>
              <td><i class="fas fa-print"></i> Feltz Printing Service</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Capla Paprocki"> Capla Paprocki (Sample)</td>
          </tr>
          <tr>
              <td>Get Approval from Manager</td>
              <td>13/07/2024</td>
              <td>Not Started</td>
              <td>Low</td>
              <td><i class="fas fa-user"></i> Chapman</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Simon Morasca"> Simon Morasca (Sample)</td>
          </tr>
          <tr>
              <td>Get Approval from Manager</td>
              <td>15/07/2024</td>
              <td>In Progress</td>
              <td>Normal</td>
              <td><i class="fas fa-industry"></i> Commercial Press</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Leota Dilliard"> Leota Dilliard (Sample)</td>
          </tr>
          </tbody>
      </table>
      <div class="text-right">
          <small>1 to 10</small>
      </div>
  </div>
  </div>


  
  <div class="dashboard" id="dasboard">
    <div class="container mt-5">
      <h2>Resent Activity</h2>
      <div class="d-flex mb-3">
          
          <a href="#" class="ml-auto nav-feature"><i class="fas fa-filter"></i> Filter</a>
          <a href="#" class="nav-feature"><i class="fas fa-sort"></i> Sort</a>
          <a href="#" class="nav-feature"><i class="fas fa-search"></i></a>
      </div>
      <table class="table table-bordered">
          <thead class="thead-light">
          <tr>
              <th>Subject</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Related To</th>
              <th>Contact Name</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>Register for upcoming CRM Webinars</td>
              <td>14/07/2024</td>
              <td>Not Started</td>
              <td>Low</td>
              <td><i class="fas fa-building"></i> King (Sample)</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Kris Marrier"> Kris Marrier (Sample)</td>
          </tr>
          <tr>
              <td>Refer CRM Videos</td>
              <td>16/07/2024</td>
              <td>In Progress</td>
              <td>Normal</td>
              <td><i class="fas fa-briefcase"></i> Morlong Associates</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Mitsue Tollner"> Mitsue Tollner (Sample)</td>
          </tr>
          <tr>
              <td>Competitor Comparison Document</td>
              <td>12/07/2024</td>
              <td>Not Started</td>
              <td>Highest</td>
              <td><i class="fas fa-print"></i> Feltz Printing Service</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Capla Paprocki"> Capla Paprocki (Sample)</td>
          </tr>
          <tr>
              <td>Get Approval from Manager</td>
              <td>13/07/2024</td>
              <td>Not Started</td>
              <td>Low</td>
              <td><i class="fas fa-user"></i> Chapman</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Simon Morasca"> Simon Morasca (Sample)</td>
          </tr>
          <tr>
              <td>Get Approval from Manager</td>
              <td>15/07/2024</td>
              <td>In Progress</td>
              <td>Normal</td>
              <td><i class="fas fa-industry"></i> Commercial Press</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Leota Dilliard"> Leota Dilliard (Sample)</td>
          </tr>
          </tbody>
      </table>
      <div class="text-right">
          <small>1 to 10</small>
      </div>
  </div>
  </div>


  <div class="dashboard" id="dasboard">
    <div class="container mt-5">
      <h2>Closed Tickets</h2>
      <div class="d-flex mb-3">
          
          <a href="#" class="ml-auto nav-feature"><i class="fas fa-filter"></i> Filter</a>
          <a href="#" class="nav-feature"><i class="fas fa-sort"></i> Sort</a>
          <a href="#" class="nav-feature"><i class="fas fa-search"></i></a>
      </div>
      <table class="table table-bordered">
          <thead class="thead-light">
          <tr>
              <th>Subject</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Related To</th>
              <th>Contact Name</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>Register for upcoming CRM Webinars</td>
              <td>14/07/2024</td>
              <td>Not Started</td>
              <td>Low</td>
              <td><i class="fas fa-building"></i> King (Sample)</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Kris Marrier"> Kris Marrier (Sample)</td>
          </tr>
          <tr>
              <td>Refer CRM Videos</td>
              <td>16/07/2024</td>
              <td>In Progress</td>
              <td>Normal</td>
              <td><i class="fas fa-briefcase"></i> Morlong Associates</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Mitsue Tollner"> Mitsue Tollner (Sample)</td>
          </tr>
          <tr>
              <td>Competitor Comparison Document</td>
              <td>12/07/2024</td>
              <td>Not Started</td>
              <td>Highest</td>
              <td><i class="fas fa-print"></i> Feltz Printing Service</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Capla Paprocki"> Capla Paprocki (Sample)</td>
          </tr>
          <tr>
              <td>Get Approval from Manager</td>
              <td>13/07/2024</td>
              <td>Not Started</td>
              <td>Low</td>
              <td><i class="fas fa-user"></i> Chapman</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Simon Morasca"> Simon Morasca (Sample)</td>
          </tr>
          <tr>
              <td>Get Approval from Manager</td>
              <td>15/07/2024</td>
              <td>In Progress</td>
              <td>Normal</td>
              <td><i class="fas fa-industry"></i> Commercial Press</td>
              <td><img src="https://via.placeholder.com/30" class="rounded-circle" alt="Leota Dilliard"> Leota Dilliard (Sample)</td>
          </tr>
          </tbody>
      </table>
      <div class="text-right">
          <small>1 to 10</small>
      </div>
  </div>
  </div>
`;
