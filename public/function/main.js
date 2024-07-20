import { dashboardTemplate } from '../template/dashboard.js';
import { openTicketsTemplate } from '../template/openticket.js';
import { closedTicketsTemplate } from '../template/closeticket.js';
import { resentActivityTemplate } from '../template/resentActivity.js';
import { orgTemplate } from '../form/dg-app-entity/dg-app-entity-org.js';
import { ContactTemplate } from '../form/dg-app-entity/dg-app-entity-contact.js';
import { leadTemplate } from '../form/dg-app-entity/dg-app-entity-lead.js';
import { projectTemplate } from '../form/dg-app-entity/dg-app-entity-project.js';
import { teamTemplate } from '../form/dg-app-entity/dg-app-entity-team.js';
import { ticketTemplate } from '../form/dg-app-entity/dg-app-entity-ticket.js';
import { organizationsTemplate } from '../template/myorg.js';
import { teamlistTemplate } from '../template/myteam.js';
import { projectslistTemplate } from '../template/myproject.js';
import { leadlistTemplate } from '../template/mylead.js';
import { ticketlistTemplate } from '../template/myticket.js';
import { mycontactTemplate } from '../template/mycontact.js';

document.addEventListener('DOMContentLoaded', () => {
    const templates = {
        dashboard: dashboardTemplate,
        openTickets: openTicketsTemplate,
        closedTickets: closedTicketsTemplate,
        resentActivity: resentActivityTemplate,
        org: orgTemplate,
        lead: leadTemplate,
        project: projectTemplate,
        team: teamTemplate,
        ticket: ticketTemplate,
        organization: organizationsTemplate,
        teamlist: teamlistTemplate,
        projectlist: projectslistTemplate,
        leadlist: leadlistTemplate,
        ticketlist: ticketlistTemplate,
        contact: ContactTemplate,
        mycontact:  mycontactTemplate
    };

    const loadTemplate = (template, url) => {
        document.getElementById('dg-app-user-content').innerHTML = template;
        if (url) {
            history.pushState(null, '', url);
        }
    };

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget.getAttribute('data-target');
            if (templates[target]) {
                loadTemplate(templates[target], `/${target}`);
            }
        });
    });

    window.addEventListener('popstate', () => {
        const path = window.location.pathname.slice(1);
        if (path === 'dashboard' || !templates[path]) {
            loadTemplate(dashboardTemplate, '/dashboard');
        } else {
            loadTemplate(templates[path], null);
        }
    });    
    

    const initialPath = window.location.pathname.slice(1);
    if (templates[initialPath]) {
        loadTemplate(templates[initialPath], null);
    } else {
        loadTemplate(templates.dashboard, '/dashboard');
    }
});