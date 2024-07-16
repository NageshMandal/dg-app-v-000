
    document.addEventListener('DOMContentLoaded', function() {
        function exportTableToCSV(filename) {
            const tables = document.querySelectorAll('table');
            let csv = [];
            
            tables.forEach(table => {
                // Find the preceding <h2> title
                let title = table.previousElementSibling;
                while (title && title.tagName !== 'H2') {
                    title = title.previousElementSibling;
                }
                
                if (title && title.tagName === 'H2') {
                    // Add the title to the CSV
                    csv.push(`"${title.innerText}"`); // Enclose in quotes
                }

                const rows = table.querySelectorAll('tr');
                
                rows.forEach(row => {
                    const cols = row.querySelectorAll('td, th');
                    let rowData = [];
                    
                    cols.forEach(col => rowData.push('"' + col.innerText + '"'));
                    
                    csv.push(rowData.join(',')); // Join columns by commas
                });

                csv.push(''); // Add an empty line to separate tables
            });

            // Create a Blob from the CSV data
            const csvFile = new Blob([csv.join('\n')], { type: 'text/csv' });

            // Create a link to download the CSV file
            const downloadLink = document.createElement('a');
            downloadLink.download = filename;
            downloadLink.href = window.URL.createObjectURL(csvFile);
            downloadLink.style.display = 'none';

            // Append the link to the body
            document.body.appendChild(downloadLink);

            // Trigger the download by simulating a click
            downloadLink.click();

            // Remove the link from the document
            document.body.removeChild(downloadLink);
        }

        // Add event listener to the Export button
        const exportButton = document.getElementById('exportData');
        if (exportButton) {
            exportButton.addEventListener('click', function() {
                exportTableToCSV('Export Data.csv');
            });
        }
    });
  


    document.getElementById('dashboard').addEventListener('click', function() {
        location.reload();
    });



  document.addEventListener('DOMContentLoaded', function() {
      // Function to fetch and update open tickets
      function fetchAndPopulateOpenTickets() {
          fetch('/tickets')
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Network response was not ok');
                  }
                  return response.json();
              })
              .then(data => {
                  const tableBody = document.querySelector('#openticket tbody');
                  if (tableBody) {
                      tableBody.innerHTML = ''; // Clear existing rows

                      // Iterate over each ticket and create table rows
                      data.forEach(ticket => {
                          const row = document.createElement('tr');
                          row.innerHTML = `
                              <td>${ticket.title}</td>
                              <td>${ticket.description}</td>
                              <td>${ticket.status}</td>
                              <td>${ticket.priority}</td>
                              <td>${ticket.assignedTo}</td>
                              <td>${ticket.projectId}</td>
                          `;
                          tableBody.appendChild(row);
                      });
                  } else {
                      console.error('Table body not found');
                  }
              })
              .catch(error => console.error('Error fetching tickets:', error.message));
      }

      // Add event listener to Open Tickets link
      const openTicketsLink = document.getElementById('openTickets');
      if (openTicketsLink) {
          openTicketsLink.addEventListener('click', function(event) {
              event.preventDefault(); // Prevent default link behavior
              fetchAndPopulateOpenTickets();
          });
      }
  });




    document.addEventListener("DOMContentLoaded", function() {
        // Function to fetch and update leads table
        function fetchAndPopulateLeads() {
            fetch('/leads')
                .then(response => response.json())
                .then(data => {
                    const tableBody = document.querySelector('#mytickets tbody');
                    if (tableBody) {
                        tableBody.innerHTML = ''; // Clear existing rows
                        data.forEach(lead => {
                            const row = document.createElement('tr');
                            row.innerHTML = `
                                <td>${lead.name}</td>
                                <td>${lead.email}</td>
                                <td>${lead.teamId}</td>
                            `;
                            tableBody.appendChild(row);
                        });
                    } else {
                        console.error('Table body not found');
                    }
                })
                .catch(error => console.error('Error fetching leads:', error));
        }
    
        // Function to fetch and update tickets table
        function fetchAndPopulateTickets() {
            fetch('/tickets')
                .then(response => response.json())
                .then(data => {
                    const tableBody = document.querySelector('#myTicket tbody');
                    if (tableBody) {
                        tableBody.innerHTML = ''; // Clear existing rows
                        data.forEach(ticket => {
                            const row = document.createElement('tr');
                            row.innerHTML = `
                                <td>${ticket.title}</td>
                                <td>${ticket.description}</td>
                                <td>${ticket.status}</td>
                                <td>${ticket.priority}</td>
                                <td>${ticket.assignedTo}</td>
                                <td>${ticket.projectId}</td>
                            `;
                            tableBody.appendChild(row);
                        });
                    } else {
                        console.error('Table body not found');
                    }
                })
                .catch(error => console.error('Error fetching tickets:', error.message));
        }
    
        // Function to fetch and update projects table
        function fetchAndPopulateProjects() {
            fetch('/projects')
                .then(response => response.json())
                .then(data => {
                    const tableBody = document.querySelector('#projectTable tbody');
                    if (tableBody) {
                        tableBody.innerHTML = ''; // Clear existing rows
                        data.forEach(project => {
                            const row = document.createElement('tr');
                            row.innerHTML = `
                                <td>${project.name}</td>
                                <td>${project.description}</td>
                                <td>${project.startDate}</td>
                                <td>${project.endDate}</td>
                                <td>${project.teamId}</td>
                            `;
                            tableBody.appendChild(row);
                        });
                    } else {
                        console.error('Table body not found');
                    }
                })
                .catch(error => console.error('Error fetching projects:', error.message));
        }
    
        // Function to fetch and display counts
        async function fetchAndDisplayCounts() {
            try {
                const [leadsResponse, projectsResponse, ticketsResponse, teamsResponse] = await Promise.all([
                    fetch('/leads'),
                    fetch('/projects'),
                    fetch('/tickets'),
                    fetch('/teams')
                ]);
    
                const leadsData = await leadsResponse.json();
                const projectsData = await projectsResponse.json();
                const ticketsData = await ticketsResponse.json();
                const teamsData = await teamsResponse.json();
    
                document.getElementById('leadsCount').textContent = leadsData.length;
                document.getElementById('projectsCount').textContent = projectsData.length;
                document.getElementById('ticketsCount').textContent = ticketsData.length;
                document.getElementById('teamsCount').textContent = teamsData.length;
            } catch (error) {
                console.error('Error fetching and displaying counts:', error.message);
            }
        }
    
        // Fetch and populate data on page load
        fetchAndPopulateLeads();
        fetchAndPopulateTickets();
        fetchAndPopulateProjects();
        fetchAndDisplayCounts();
    
        // Add event listener to Dashboard link
        const dashboardLink = document.getElementById('dashboard');
        if (dashboardLink) {
            dashboardLink.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior
                fetchAndPopulateLeads();
                fetchAndPopulateTickets();
                fetchAndPopulateProjects();
                fetchAndDisplayCounts();
            });
        }
    });




    document.addEventListener('DOMContentLoaded', () => {
        const ticketsLink = document.getElementById('tickets');
        ticketsLink.addEventListener('click', async (event) => {
            event.preventDefault(); // Prevent default link behavior
            await fetchAndDisplayTickets(); // Fetch tickets when link is clicked
        });
    });

    async function fetchAndDisplayTickets() {
      try {
          const response = await fetch('/tickets'); // Fetch data from the backend
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const tickets = await response.json(); // Parse JSON response
  
          const ticketListContainer = document.getElementById('ticketList');
          ticketListContainer.innerHTML = ''; // Clear any existing table rows
  
          // Iterate through the tickets and create table rows
          tickets.forEach(ticket => {
              const row = document.createElement('tr');
  
              // Create table cells for each ticket property
              const titleCell = document.createElement('td');
              titleCell.textContent = ticket.title;
              row.appendChild(titleCell);
  
              const descriptionCell = document.createElement('td');
              descriptionCell.textContent = ticket.description;
              row.appendChild(descriptionCell);
  
              const statusCell = document.createElement('td');
              statusCell.textContent = ticket.status;
              row.appendChild(statusCell);
  
              const priorityCell = document.createElement('td');
              priorityCell.textContent = ticket.priority;
              row.appendChild(priorityCell);
  
              const assignedToCell = document.createElement('td');
              assignedToCell.textContent = ticket.assignedTo;
              row.appendChild(assignedToCell);
  
              const projectIdCell = document.createElement('td');
              projectIdCell.textContent = ticket.projectId;
              row.appendChild(projectIdCell);
  
              // Create edit button
              const editButtonCell = document.createElement('td');
              const editButton = document.createElement('button');
              editButton.textContent = 'Edit';
              editButton.classList.add('btn', 'btn-primary', 'btn-sm');
              editButton.onclick = () => editTicket(ticket._id);
              editButtonCell.appendChild(editButton);
              row.appendChild(editButtonCell);
  
              // Create delete button
              const deleteButtonCell = document.createElement('td');
              const deleteButton = document.createElement('button');
              deleteButton.textContent = 'Delete';
              deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
              deleteButton.onclick = () => deleteTicket(ticket._id);
              deleteButtonCell.appendChild(deleteButton);
              row.appendChild(deleteButtonCell);
  
              // Append row to the table body
              ticketListContainer.appendChild(row);
          });
      } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
      }
  }
  

    async function editTicket(ticketId) {
        try {
            const response = await fetch(`/tickets/${ticketId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch ticket details');
            }
            const ticket = await response.json();

            const formContainer = document.createElement('div');
            formContainer.classList.add('container', 'mt-5');

            const formTitle = document.createElement('h2');
            formTitle.textContent = 'Edit Ticket';

            const form = document.createElement('form');
            form.id = 'editTicketForm';

            // Title input field
            const titleLabel = document.createElement('label');
            titleLabel.setAttribute('for', 'editTicketTitle');
            titleLabel.textContent = 'Title';

            const titleInput = document.createElement('input');
            titleInput.type = 'text';
            titleInput.classList.add('form-control');
            titleInput.id = 'editTicketTitle';
            titleInput.value = ticket.title;
            titleInput.required = true;

            // Description input field
            const descriptionLabel = document.createElement('label');
            descriptionLabel.setAttribute('for', 'editTicketDescription');
            descriptionLabel.textContent = 'Description';

            const descriptionInput = document.createElement('textarea');
            descriptionInput.classList.add('form-control');
            descriptionInput.id = 'editTicketDescription';
            descriptionInput.textContent = ticket.description;
            descriptionInput.required = true;

            // Status input field
            const statusLabel = document.createElement('label');
            statusLabel.setAttribute('for', 'editTicketStatus');
            statusLabel.textContent = 'Status';

            const statusInput = document.createElement('select');
            statusInput.classList.add('form-control');
            statusInput.id = 'editTicketStatus';

            const statusOptions = ['open', 'in progress', 'closed'];
            statusOptions.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                if (option === ticket.status) {
                    optionElement.selected = true;
                }
                statusInput.appendChild(optionElement);
            });

            // Priority input field
            const priorityLabel = document.createElement('label');
            priorityLabel.setAttribute('for', 'editTicketPriority');
            priorityLabel.textContent = 'Priority';

            const priorityInput = document.createElement('select');
            priorityInput.classList.add('form-control');
            priorityInput.id = 'editTicketPriority';

            const priorityOptions = ['low', 'medium', 'high'];
            priorityOptions.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                if (option === ticket.priority) {
                    optionElement.selected = true;
                }
                priorityInput.appendChild(optionElement);
            });

            // Assigned To input field
            const assignedToLabel = document.createElement('label');
            assignedToLabel.setAttribute('for', 'editTicketAssignedTo');
            assignedToLabel.textContent = 'Assigned To';

            const assignedToInput = document.createElement('input');
            assignedToInput.type = 'text';
            assignedToInput.classList.add('form-control');
            assignedToInput.id = 'editTicketAssignedTo';
            assignedToInput.value = ticket.assignedTo;

            // Project ID input field
            const projectIdLabel = document.createElement('label');
            projectIdLabel.setAttribute('for', 'editTicketProjectId');
            projectIdLabel.textContent = 'Project ID';

            const projectIdInput = document.createElement('input');
            projectIdInput.type = 'text';
            projectIdInput.classList.add('form-control');
            projectIdInput.id = 'editTicketProjectId';
            projectIdInput.value = ticket.projectId;
            projectIdInput.required = true;

            // Submit button
            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.classList.add('btn', 'btn-primary', 'me-2');
            submitButton.textContent = 'Save';

            // Cancel button
            const cancelButton = document.createElement('button');
            cancelButton.type = 'button';
            cancelButton.classList.add('btn', 'btn-secondary');
            cancelButton.textContent = 'Cancel';
            cancelButton.addEventListener('click', () => {
                formContainer.remove(); // Remove the form on cancel
                reopenTicketList();
            });

            // Append elements to form
            form.append(
                titleLabel, titleInput,
                descriptionLabel, descriptionInput,
                statusLabel, statusInput,
                priorityLabel, priorityInput,
                assignedToLabel, assignedToInput,
                projectIdLabel, projectIdInput,
                submitButton, cancelButton
            );

            // Append form elements to container
            formContainer.append(formTitle, form);

            // Append form container to the specified div
            const userContentDiv = document.getElementById('dg-app-user-content');
            userContentDiv.innerHTML = ''; // Clear existing content (if any)
            userContentDiv.appendChild(formContainer);

            // Handle form submission
            form.addEventListener('submit', async (event) => {
                event.preventDefault();

                const updatedTicket = {
                    title: titleInput.value,
                    description: descriptionInput.value,
                    status: statusInput.value,
                    priority: priorityInput.value,
                    assignedTo: assignedToInput.value,
                    projectId: projectIdInput.value
                };

                try {
                    const updateResponse = await fetch(`/tickets/${ticketId}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedTicket)
                    });

                    if (!updateResponse.ok) {
                        throw new Error('Failed to update ticket');
                    }

                    const updatedData = await updateResponse.json();
                    console.log('Ticket updated:', updatedData);

                    // Remove the form after successful update
                    formContainer.remove();
                    reopenTicketList();
                    // Optionally, refresh ticket list or perform other actions
                    await fetchAndDisplayTickets(); // Example function to fetch tickets list
                } catch (error) {
                    console.error('Error updating ticket:', error);
                    // Handle error display or logging
                }
            });

        } catch (error) {
            console.error('Error fetching ticket details:', error);
            // Handle error display or logging
        }
    }

    async function deleteTicket(ticketId, listItem) {
        if (!confirm("Are you sure you want to delete this ticket?")) {
            return;
        }

        try {
            const response = await fetch(`/tickets/${ticketId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result.message);
            // Remove the list item from the DOM
            listItem.remove();
            reopenTicketList();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    // Function to open the "My Tickets" link
    function reopenTicketList() {
        const ticketsLink = document.getElementById('tickets');
        ticketsLink.click(); // Trigger the click event to reopen the link
    }




  document.addEventListener('DOMContentLoaded', () => {
    const leadsLink = document.getElementById('leads');
    leadsLink.addEventListener('click', async (event) => {
        event.preventDefault(); // Prevent default link behavior
        await fetchAndDisplayLeads(); // Fetch leads when link is clicked
    });
    });
    
    async function fetchAndDisplayLeads() {
      try {
          const response = await fetch('/leads'); // Fetch data from the backend
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const leads = await response.json(); // Parse JSON response
  
          const leadListContainer = document.getElementById('leadList');
          leadListContainer.innerHTML = ''; // Clear any existing table rows
  
          // Iterate through the leads and create table rows
          leads.forEach(lead => {
              const row = document.createElement('tr');
  
              // Name column
              const nameCell = document.createElement('td');
              nameCell.textContent = lead.name;
              row.appendChild(nameCell);
  
              // Email column
              const emailCell = document.createElement('td');
              emailCell.textContent = lead.email;
              row.appendChild(emailCell);
  
              // Team ID column
              const teamIdCell = document.createElement('td');
              teamIdCell.textContent = lead.teamId;
              row.appendChild(teamIdCell);
  
              // Actions column with Edit and Delete buttons
              const actionsCell = document.createElement('td');
  
              // Create edit button
              const editButton = document.createElement('button');
              editButton.textContent = 'Edit';
              editButton.classList.add('btn', 'btn-primary', 'btn-sm', 'me-2', 'btn-sm');
              editButton.onclick = () => editLead(lead._id);
              actionsCell.appendChild(editButton);
  
              // Create delete button
              const deleteButton = document.createElement('button');
              deleteButton.textContent = 'Delete';
              deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
              deleteButton.onclick = () => deleteLead(lead._id, row);
              actionsCell.appendChild(deleteButton);
  
              row.appendChild(actionsCell);
  
              leadListContainer.appendChild(row);
          });
      } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
      }
  }
  

  async function editLead(leadId) {
    try {
        const response = await fetch(`/leads/${leadId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch lead details');
        }
        const lead = await response.json();

        const formContainer = document.createElement('div');
        formContainer.classList.add('container', 'mt-5');

        const formTitle = document.createElement('h2');
        formTitle.textContent = 'Edit Lead';

        const form = document.createElement('form');
        form.id = 'editLeadForm';

        // Name input field
        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'editLeadName');
        nameLabel.textContent = 'Name';

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.classList.add('form-control');
        nameInput.id = 'editLeadName';
        nameInput.value = lead.name;
        nameInput.required = true;

        // Email input field
        const emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', 'editLeadEmail');
        emailLabel.textContent = 'Email';

        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.classList.add('form-control');
        emailInput.id = 'editLeadEmail';
        emailInput.value = lead.email;
        emailInput.required = true;

        // Team ID input field
        const teamIdLabel = document.createElement('label');
        teamIdLabel.setAttribute('for', 'editLeadTeamId');
        teamIdLabel.textContent = 'Team ID';

        const teamIdInput = document.createElement('input');
        teamIdInput.type = 'text';
        teamIdInput.classList.add('form-control');
        teamIdInput.id = 'editLeadTeamId';
        teamIdInput.value = lead.teamId;
        teamIdInput.required = true;

        // Submit button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.classList.add('btn', 'btn-primary', 'me-2');
        submitButton.textContent = 'Save';

        // Cancel button
        const cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.classList.add('btn', 'btn-secondary');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', () => {
            formContainer.remove(); // Remove the form on cancel
            reopenLeadList();
        });

        // Append elements to form
        form.append(
            nameLabel, nameInput,
            emailLabel, emailInput,
            teamIdLabel, teamIdInput,
            submitButton, cancelButton
        );

        // Append form elements to container
        formContainer.append(formTitle, form);

        // Append form container to the specified div
        const userContentDiv = document.getElementById('dg-app-user-content');
        userContentDiv.innerHTML = ''; // Clear existing content (if any)
        userContentDiv.appendChild(formContainer);

        // Handle form submission
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const updatedLead = {
                name: nameInput.value,
                email: emailInput.value,
                teamId: teamIdInput.value
            };

            try {
                const updateResponse = await fetch(`/leads/${leadId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedLead)
                });

                if (!updateResponse.ok) {
                    throw new Error('Failed to update lead');
                }

                const updatedData = await updateResponse.json();
                console.log('Lead updated:', updatedData);

                // Remove the form after successful update
                formContainer.remove();
                reopenLeadList();
                // Optionally, refresh lead list or perform other actions
                await fetchAndDisplayLeads(); // Example function to fetch leads list
            } catch (error) {
                console.error('Error updating lead:', error);
                // Handle error display or logging
            }
        });

    } catch (error) {
        console.error('Error fetching lead details:', error);
        // Handle error display or logging
    }
}

async function deleteLead(leadId, listItem) {
    if (!confirm("Are you sure you want to delete this lead?")) {
        return;
    }

    try {
        const response = await fetch(`/leads/${leadId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result.message);
        // Remove the list item from the DOM
        listItem.remove();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
 // Function to open the "My Leads" link
 function reopenLeadList() {
  const leadsLink = document.getElementById('leads');
  leadsLink.click(); // Trigger the click event to reopen the link
}



    document.addEventListener('DOMContentLoaded', () => {
      const teamLink = document.getElementById('team');
      teamLink.addEventListener('click', async (event) => {
          event.preventDefault(); // Prevent default link behavior
          await fetchOrganizations(); // Fetch organizations when link is clicked
      });
  });
  
  async function fetchAndDisplayTeams() {
    try {
        const response = await fetch('/teams'); // Fetch data from the backend
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const teams = await response.json(); // Parse JSON response

        const teamList = document.getElementById('TeamList');
        teamList.innerHTML = ''; // Clear any existing content

        // Create table
        const table = document.createElement('table');
        table.classList.add('table', 'table-bordered');

        // Create table header
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Lead ID</th>
                <th>Actions</th>
            </tr>
        `;
        table.appendChild(thead);

        // Create table body
        const tbody = document.createElement('tbody');
        teams.forEach(team => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${team.name}</td>
                <td>${team.description}</td>
                <td>${team.leadId}</td>
                <td>
                    <button class="btn btn-primary me-2 btn-sm" onclick="editTeam('${team._id}')">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteTeam('${team._id}', this.parentElement.parentElement)">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        // Append table to teamList container
        teamList.appendChild(table);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}


    async function editTeam(teamId) {
        try {
            const response = await fetch(`/teams/${teamId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch team details');
            }
            const team = await response.json();

            const formContainer = document.createElement('div');
            formContainer.classList.add('container', 'mt-5');

            const formTitle = document.createElement('h2');
            formTitle.textContent = 'Edit Team';

            const form = document.createElement('form');
            form.id = 'editTeamForm';

            // Name input field
            const nameLabel = document.createElement('label');
            nameLabel.setAttribute('for', 'editName');
            nameLabel.textContent = 'Name';

            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.classList.add('form-control');
            nameInput.id = 'editName';
            nameInput.value = team.name;
            nameInput.required = true;

            // Description input field
            const descriptionLabel = document.createElement('label');
            descriptionLabel.setAttribute('for', 'editDescription');
            descriptionLabel.textContent = 'Description';

            const descriptionInput = document.createElement('textarea');
            descriptionInput.classList.add('form-control');
            descriptionInput.id = 'editDescription';
            descriptionInput.textContent = team.description;
            descriptionInput.required = true;

            // Lead ID input field
            const leadIdLabel = document.createElement('label');
            leadIdLabel.setAttribute('for', 'editLeadId');
            leadIdLabel.textContent = 'Lead ID';

            const leadIdInput = document.createElement('input');
            leadIdInput.type = 'text';
            leadIdInput.classList.add('form-control');
            leadIdInput.id = 'editLeadId';
            leadIdInput.value = team.leadId;
            leadIdInput.required = true;

            // Submit button
            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.classList.add('btn', 'btn-primary', 'me-2');
            submitButton.textContent = 'Save';

            // Cancel button
            const cancelButton = document.createElement('button');
            cancelButton.type = 'button';
            cancelButton.classList.add('btn', 'btn-secondary');
            cancelButton.textContent = 'Cancel';
            cancelButton.addEventListener('click', () => {
                formContainer.remove(); // Remove the form on cancel
                reopenTeamList();
            });

            // Append elements to form
            form.append(
                nameLabel, nameInput,
                descriptionLabel, descriptionInput,
                leadIdLabel, leadIdInput,
                submitButton, cancelButton
            );

            // Append form elements to container
            formContainer.append(formTitle, form);

            // Append form container to the specified div
            const userContentDiv = document.getElementById('dg-app-user-content');
            userContentDiv.innerHTML = ''; // Clear existing content (if any)
            userContentDiv.appendChild(formContainer);

            // Handle form submission
            form.addEventListener('submit', async (event) => {
                event.preventDefault();

                const updatedTeam = {
                    name: nameInput.value,
                    description: descriptionInput.value,
                    leadId: leadIdInput.value
                };

                try {
                    const updateResponse = await fetch(`/teams/${teamId}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedTeam)
                    });

                    if (!updateResponse.ok) {
                        throw new Error('Failed to update team');
                    }

                    const updatedData = await updateResponse.json();
                    console.log('Team updated:', updatedData);

                    // Remove the form after successful update
                    formContainer.remove();
                    reopenTeamList();
                    // Optionally, refresh team list or perform other actions
                    await fetchAndDisplayTeams(); // Example function to fetch teams list
                } catch (error) {
                    console.error('Error updating team:', error);
                    // Handle error display or logging
                }
            });

        } catch (error) {
            console.error('Error fetching team details:', error);
            // Handle error display or logging
        }
    }

    async function deleteTeam(teamId, listItem) {
        if (!confirm("Are you sure you want to delete this team?")) {
            return;
        }

        try {
            const response = await fetch(`/teams/${teamId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result.message);
            // Remove the list item from the DOM
            listItem.remove();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    // Function to open the "My Organisation" link
function  reopenTeamList() {
  const teamLink = document.getElementById('team');
  teamLink.click(); // Trigger the click event to reopen the link
}


  document.addEventListener('DOMContentLoaded', () => {
      const collectionsLink = document.getElementById('collectionsLink');
      collectionsLink.addEventListener('click', async (event) => {
          event.preventDefault(); // Prevent default link behavior
          await fetchOrganizations(); // Fetch organizations when link is clicked
      });
  });

  // Function to fetch organizations and display them
  async function fetchOrganizations() {
      try {
          const response = await fetch('/organizations');
          if (!response.ok) {
              throw new Error('Failed to fetch organizations');
          }
          const organizations = await response.json();
          const organizationList = document.getElementById('organizationList');
          organizationList.innerHTML = ''; // Clear previous list

          organizations.forEach(org => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${org.name}</td>
                <td>${org.email}</td>
                <td>${org.address}</td>
                <td>${org.phone}</td>
                <td>
                    <button class="btn btn-primary me-2 btn-sm" onclick="editOrganization('${org._id}')">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteOrganization('${org._id}')">Delete</button>
                </td>
            `;
            organizationList.appendChild(tr);
        });
      } catch (error) {
          console.error('Error fetching organizations:', error);
      }
  }
  // Function to delete an organization
  async function deleteOrganization(id) {
      try {
          const response = await fetch(`/organizations/${id}`, {
              method: 'DELETE'
          });
          if (!response.ok) {
              throw new Error('Failed to delete organization');
          }
          const data = await response.json();
          console.log(data.message); // Log success message
          await fetchOrganizations(); // Refresh the list after deletion
      } catch (error) {
          console.error('Error deleting organization:', error);
      }
  }

  // Function to dynamically create and handle organization edit form
async function editOrganization(id) {
  try {
      // Fetch organization data
      const response = await fetch(`/organizations/${id}`);
      if (!response.ok) {
          throw new Error('Failed to fetch organization details');
      }
      const organization = await response.json();
      
      // Create form elements
      const formContainer = document.createElement('div');
      formContainer.classList.add('container', 'mt-5');
      
      const formTitle = document.createElement('h2');
      formTitle.textContent = 'Edit Organization';
      
      const form = document.createElement('form');
      form.id = 'editOrganizationForm';
      
      // Name input field
      const nameLabel = document.createElement('label');
      nameLabel.setAttribute('for', 'editName');
      nameLabel.textContent = 'Name';
      
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.classList.add('form-control');
      nameInput.id = 'editName';
      nameInput.value = organization.name;
      nameInput.required = true;
      
      // Address input field
      const addressLabel = document.createElement('label');
      addressLabel.setAttribute('for', 'editAddress');
      addressLabel.textContent = 'Address';
      
      const addressInput = document.createElement('input');
      addressInput.type = 'text';
      addressInput.classList.add('form-control');
      addressInput.id = 'editAddress';
      addressInput.value = organization.address;
      addressInput.required = true;
      
      // Phone input field
      const phoneLabel = document.createElement('label');
      phoneLabel.setAttribute('for', 'editPhone');
      phoneLabel.textContent = 'Phone';
      
      const phoneInput = document.createElement('input');
      phoneInput.type = 'text';
      phoneInput.classList.add('form-control');
      phoneInput.id = 'editPhone';
      phoneInput.value = organization.phone;
      phoneInput.required = true;
      
      // Email input field
      const emailLabel = document.createElement('label');
      emailLabel.setAttribute('for', 'editEmail');
      emailLabel.textContent = 'Email';
      
      const emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.classList.add('form-control');
      emailInput.id = 'editEmail';
      emailInput.value = organization.email;
      emailInput.required = true;
      
      // Submit button
      const submitButton = document.createElement('button');
      submitButton.type = 'submit';
      submitButton.classList.add('btn', 'btn-primary', 'me-2');
      submitButton.textContent = 'Save';
      
      // Cancel button
      const cancelButton = document.createElement('button');
      cancelButton.type = 'button';
      cancelButton.classList.add('btn', 'btn-secondary');
      cancelButton.textContent = 'Cancel';
      cancelButton.addEventListener('click', () => {
          formContainer.remove(); // Remove the form on cancel
          openOrganizationsLink(); // Reopen the "My Organisation" link
      });
      
      // Append elements to form
      form.append(
          nameLabel, nameInput,
          addressLabel, addressInput,
          phoneLabel, phoneInput,
          emailLabel, emailInput,
          submitButton, cancelButton
      );
      
      // Append form elements to container
      formContainer.append(formTitle, form);
      
      // Append form container to the specified div
      const userContentDiv = document.getElementById('dg-app-user-content');
      userContentDiv.innerHTML = ''; // Clear existing content (if any)
      userContentDiv.appendChild(formContainer);
      
      // Handle form submission
      form.addEventListener('submit', async (event) => {
          event.preventDefault();
          
          const updatedOrganization = {
              name: nameInput.value,
              address: addressInput.value,
              phone: phoneInput.value,
              email: emailInput.value
          };
          
          try {
              const updateResponse = await fetch(`/organizations/${id}`, {
                  method: 'PATCH',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(updatedOrganization)
              });
              
              if (!updateResponse.ok) {
                  throw new Error('Failed to update organization');
              }
              
              const updatedData = await updateResponse.json();
              console.log('Organization updated:', updatedData);
              
              // Remove the form after successful update
              formContainer.remove();
              openOrganizationsLink(); // Reopen the "My Organisation" link
              
              // Optionally, refresh organization list or perform other actions
              await fetchOrganizations(); // Example function to fetch organizations list
          } catch (error) {
              console.error('Error updating organization:', error);
              // Handle error display or logging
          }
      });
      
  } catch (error) {
      console.error('Error fetching organization details:', error);
      // Handle error display or logging
  }
}

// Function to open the "My Organisation" link
function openOrganizationsLink() {
  const collectionsLink = document.getElementById('collectionsLink');
  collectionsLink.click(); // Trigger the click event to reopen the link
}

  document.addEventListener('DOMContentLoaded', () => {
      const projectsLink = document.getElementById('projects');
      projectsLink.addEventListener('click', async (event) => {
          event.preventDefault(); // Prevent default link behavior
          await fetchAndDisplayProjects(); // Fetch projects when link is clicked
      });
  });

  async function fetchAndDisplayProjects() {
    try {
        const response = await fetch('/projects'); // Fetch data from the backend
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const projects = await response.json(); // Parse JSON response

        const projectListContainer = document.getElementById('projectList');
        projectListContainer.innerHTML = ''; // Clear any existing table rows

        // Iterate through the projects and create table rows
        projects.forEach(project => {
            const row = document.createElement('tr');

            // Name
            let cell = document.createElement('td');
            cell.textContent = project.name;
            row.appendChild(cell);

            // Description
            cell = document.createElement('td');
            cell.textContent = project.description;
            row.appendChild(cell);

            // Start Date
            cell = document.createElement('td');
            cell.textContent = project.startDate;
            row.appendChild(cell);

            // End Date
            cell = document.createElement('td');
            cell.textContent = project.endDate;
            row.appendChild(cell);

            // Team ID
            cell = document.createElement('td');
            cell.textContent = project.teamId;
            row.appendChild(cell);

            // Actions (Edit and Delete buttons)
            cell = document.createElement('td');
            
            // Edit button
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('btn', 'btn-primary', 'me-2', 'btn-sm' );
            editButton.onclick = () => editProject(project._id);
            cell.appendChild(editButton);

            // Delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
            deleteButton.onclick = () => deleteProject(project._id, row);
            cell.appendChild(deleteButton);

            row.appendChild(cell);

            projectListContainer.appendChild(row);
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}


  async function editProject(projectId) {
      try {
          const response = await fetch(`/projects/${projectId}`);
          if (!response.ok) {
              throw new Error('Failed to fetch project details');
          }
          const project = await response.json();

          const formContainer = document.createElement('div');
          formContainer.classList.add('container', 'mt-5');

          const formTitle = document.createElement('h2');
          formTitle.textContent = 'Edit Project';

          const form = document.createElement('form');
          form.id = 'editProjectForm';

          // Name input field
          const nameLabel = document.createElement('label');
          nameLabel.setAttribute('for', 'editProjectName');
          nameLabel.textContent = 'Name';

          const nameInput = document.createElement('input');
          nameInput.type = 'text';
          nameInput.classList.add('form-control');
          nameInput.id = 'editProjectName';
          nameInput.value = project.name;
          nameInput.required = true;

          // Description input field
          const descriptionLabel = document.createElement('label');
          descriptionLabel.setAttribute('for', 'editProjectDescription');
          descriptionLabel.textContent = 'Description';

          const descriptionInput = document.createElement('textarea');
          descriptionInput.classList.add('form-control');
          descriptionInput.id = 'editProjectDescription';
          descriptionInput.textContent = project.description;
          descriptionInput.required = true;

          // Start Date input field
          const startDateLabel = document.createElement('label');
          startDateLabel.setAttribute('for', 'editProjectStartDate');
          startDateLabel.textContent = 'Start Date';

          const startDateInput = document.createElement('input');
          startDateInput.type = 'date';
          startDateInput.classList.add('form-control');
          startDateInput.id = 'editProjectStartDate';
          startDateInput.value = project.startDate;
          startDateInput.required = true;

          // End Date input field
          const endDateLabel = document.createElement('label');
          endDateLabel.setAttribute('for', 'editProjectEndDate');
          endDateLabel.textContent = 'End Date';

          const endDateInput = document.createElement('input');
          endDateInput.type = 'date';
          endDateInput.classList.add('form-control');
          endDateInput.id = 'editProjectEndDate';
          endDateInput.value = project.endDate;

          // Team ID input field
          const teamIdLabel = document.createElement('label');
          teamIdLabel.setAttribute('for', 'editProjectTeamId');
          teamIdLabel.textContent = 'Team ID';

          const teamIdInput = document.createElement('input');
          teamIdInput.type = 'text';
          teamIdInput.classList.add('form-control');
          teamIdInput.id = 'editProjectTeamId';
          teamIdInput.value = project.teamId;
          teamIdInput.required = true;

          // Submit button
          const submitButton = document.createElement('button');
          submitButton.type = 'submit';
          submitButton.classList.add('btn', 'btn-primary', 'me-2');
          submitButton.textContent = 'Save';

          // Cancel button
          const cancelButton = document.createElement('button');
          cancelButton.type = 'button';
          cancelButton.classList.add('btn', 'btn-secondary');
          cancelButton.textContent = 'Cancel';
          cancelButton.addEventListener('click', () => {
              formContainer.remove(); // Remove the form on cancel
              reopenProjectList();
          });

          // Append elements to form
          form.append(
              nameLabel, nameInput,
              descriptionLabel, descriptionInput,
              startDateLabel, startDateInput,
              endDateLabel, endDateInput,
              teamIdLabel, teamIdInput,
              submitButton, cancelButton
          );

          // Append form elements to container
          formContainer.append(formTitle, form);

          // Append form container to the specified div
          const userContentDiv = document.getElementById('dg-app-user-content');
          userContentDiv.innerHTML = ''; // Clear existing content (if any)
          userContentDiv.appendChild(formContainer);

          // Handle form submission
          form.addEventListener('submit', async (event) => {
              event.preventDefault();

              const updatedProject = {
                  name: nameInput.value,
                  description: descriptionInput.value,
                  startDate: startDateInput.value,
                  endDate: endDateInput.value,
                  teamId: teamIdInput.value
              };

              try {
                  const updateResponse = await fetch(`/projects/${projectId}`, {
                      method: 'PATCH',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(updatedProject)
                  });

                  if (!updateResponse.ok) {
                      throw new Error('Failed to update project');
                  }

                  const updatedData = await updateResponse.json();
                  console.log('Project updated:', updatedData);

                  // Remove the form after successful update
                  formContainer.remove();
                  reopenProjectList();
                  // Optionally, refresh project list or perform other actions
                  await fetchAndDisplayProjects(); // Example function to fetch projects list
              } catch (error) {
                  console.error('Error updating project:', error);
                  // Handle error display or logging
              }
          });

      } catch (error) {
          console.error('Error fetching project details:', error);
          // Handle error display or logging
      }
  }

  async function deleteProject(projectId, listItem) {
      if (!confirm("Are you sure you want to delete this project?")) {
          return;
      }

      try {
          const response = await fetch(`/projects/${projectId}`, {
              method: 'DELETE'
          });
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const result = await response.json();
          console.log(result.message);
          // Remove the list item from the DOM
          listItem.remove();
      } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
      }
  }

  // Function to open the "My Projects" link
  function reopenProjectList() {
      const projectsLink = document.getElementById('projects');
      projectsLink.click(); // Trigger the click event to reopen the link
  }
