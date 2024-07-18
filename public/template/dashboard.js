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
            <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   
                </button>
        </div>
    </div>
    
    <div class="row mt-4">
    <div class="col-md-3">
        <div class="dashboard-card">
            <h5>My Leads</h5>
            <p id="leadsCount">0</p>
        </div>
    </div>
    <div class="col-md-3">
        <div class="dashboard-card">
            <h5>My Projects</h5>
            <p id="projectsCount">0</p>
        </div>
    </div>
    <div class="col-md-3">
        <div class="dashboard-card">
            <h5>My Tickets</h5>
            <p id="ticketsCount">0</p>
        </div>
    </div>
    <div class="col-md-3">
        <div class="dashboard-card">
            <h5>My Team</h5>
            <p id="teamsCount">0</p>
            </div>
        </div>
    </div>
</div>





  
  <div class="dashboard" id="dasboard">
    <div class="container mt-5">
      <h2>Open Tickets</h2>
      <div class="d-flex mb-3" id="ticket-filter">
          <a href="#" class="ml-auto nav-feature"></a>
          <a href="#" class="nav-feature" onclick="sortTable()"><i class="fas fa-sort"></i> Sort</a>
          <a href="#" class="nav-feature" onclick="searchTable()"><i class="fas fa-search"></i> Search</a>
      </div>
     <table id="myTicket" class="table table-bordered">
    <thead class="thead-light">
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Assigned To</th>
            <th>Project ID</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
      <div class="text-right">
          <small>1 to 10</small>
      </div>
  </div>
  </div>


  
  <div class="dashboard" id="dasboard">
    <div class="container mt-5">
      <h2>Resent Projects</h2>
      <div class="d-flex mb-3" id="project-filter" >
          <a href="#" class="ml-auto nav-feature"></a>
          <a href="#" class="nav-feature" onclick="sortProjectTable()"><i class="fas fa-sort"></i> Sort</a>
  <a href="#" class="nav-feature" onclick="searchProjectTable()"><i class="fas fa-search"></i> Search</a>
      </div>
     <table id="projectTable" class="table table-bordered">
    <thead class="thead-light">
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Team ID</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
      <div class="text-right">
          <small>1 to 10</small>
      </div>
  </div>
  </div>


  <div class="dashboard" id="dasboard">
    <div class="container mt-5">
      <h2>My Leads</h2>
      <div class="d-flex mb-3" id="leads-filter" >       
          <a href="#" class="ml-auto nav-feature"></a>
          <a href="#" class="nav-feature" onclick="sortLeadsTable()"><i class="fas fa-sort"></i> Sort</a>
          <a href="#" class="nav-feature" onclick="searchLeadsTable()"><i class="fas fa-search"></i> Search</a>
      </div>
      <table  id="mytickets" class="table table-bordered">
          <thead class="thead-light">
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Team ID</th>
          </tr>
          </thead>
          <tbody>
             
          </tbody>
      </table>
      <div class="text-right">
          <small>1 to 10</small>
      </div>
  </div>
  </div>
  
`;
