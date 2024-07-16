export const openTicketsTemplate = `
 <div class="dashboard" id="dasboard">
    <div class="container mt-5">
      <h2>My Open Tickets</h2>
      <div class="d-flex mb-3" id="ticket-filter">
         
          <a href="#" class="ml-auto nav-feature"></a>
          <a href="#" class="nav-feature" onclick="sortTable()"><i class="fas fa-sort"></i> Sort</a>
          <a href="#" class="nav-feature" onclick="searchTable()"><i class="fas fa-search"></i> Search</a>
      </div>
      <table id="openticket" class="table table-bordered">
    <thead class="thead-light">
        <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Priority</th>
            <th scope="col">Assigned To</th>
            <th scope="col">Project ID</th>
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
