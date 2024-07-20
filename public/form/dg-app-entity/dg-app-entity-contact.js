export const ContactTemplate = `
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <h2>Save New Contact</h2>
                <form id="contactForm" method="POST" action="/contacts/saveContact">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Enter contact name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Enter contact email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" class="form-control" id="phone" name="phone" placeholder="Enter contact phone number" required>
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" id="address" name="address" placeholder="Enter contact address" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Save Contact</button>
                </form>
                <div id="status" class="mt-3"></div>
            </div>
        </div>
    </div>

    <div class="container mt-5">
    <h2>Upload Bulk Contacts</h2>
    <form id="bulkUploadForm" method="POST" action="/contacts/upload-contacts" enctype="multipart/form-data">
        <div class="form-group">
            <label for="fileInput">Upload CSV or Excel file</label>
            <input type="file" class="form-control" id="fileInput" name="file" accept=".csv, .xlsx" required>
        </div>
        <button type="submit" class="btn btn-primary">Upload</button>
    </form>
</div>

`