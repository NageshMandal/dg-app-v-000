export const ticketTemplate = `
<!-- HTML Form for Ticket -->
<div class="container mt-5">
    <h2>Ticket Form</h2>
    <form id="ticketForm" method="POST" action="/tickets">
        <div class="form-group">
            <label for="ticketTitle">Title</label>
            <input type="text" class="form-control" id="ticketTitle" name="title" required minlength="1" maxlength="200">
        </div>
        <div class="form-group">
            <label for="ticketDescription">Description</label>
            <textarea class="form-control" id="ticketDescription" name="description" maxlength="1000"></textarea>
        </div>
        <div class="form-group">
            <label for="ticketStatus">Status</label>
            <select class="form-control" id="ticketStatus" name="status" required>
                <option value="open">Open</option>
                <option value="in progress">In Progress</option>
                <option value="closed">Closed</option>
            </select>
        </div>
        <div class="form-group">
            <label for="ticketPriority">Priority</label>
            <select class="form-control" id="ticketPriority" name="priority" required>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
        <div class="form-group">
            <label for="assignedTo">Assigned To</label>
            <input type="text" class="form-control" id="assignedTo" name="assignedTo">
        </div>
        <div class="form-group">
            <label for="projectId">Project ID</label>
            <input type="text" class="form-control" id="projectId" name="projectId" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>

`