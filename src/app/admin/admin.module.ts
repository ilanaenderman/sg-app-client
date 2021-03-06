import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import {AdminApplicationTemplates} from "./dashboard/application_templates/application_templates.component";
import {AdminApplicationSubmissions} from "./dashboard/application_templates/application_submissions/application_submissions.component";
import {AdminClubs} from "./dashboard/clubs/clubs.component";
import {AdminApplicationTemplateDetail} from "./dashboard/application_templates/application_template-detail.component";
import {AdminEvaluations} from "./dashboard/professors/evaluations/evaluations.component";
import {AdminInternships} from "./dashboard/internships/internships.component";
import {AdminPosts} from "./dashboard/posts/posts.component";
import {AdminTeamMembers} from "./dashboard/team_members/team_members.component";
import {AdminProfessorDetail} from "./dashboard/professors/professor-detail.component";
import {AdminProfessors} from "./dashboard/professors/professors.component";
import { routing } from './admin.routing';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import {Admin} from "./admin.component";
import {Login} from "./login/login.component";
import {Dashboard} from "./dashboard/dashboard.component";
import {Sidebar} from "./dashboard/shared/sidebar/sidebar.component";
import {PostComponent} from "./dashboard/posts/post.component";
import {CKEditorModule} from 'ng2-ckeditor';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import {AdminNavbar} from "./dashboard/shared/navbar/home-navbar.component";
import {SharedModule} from "../shared/shared.module";
import {AdminClubDetail} from "./dashboard/clubs/club-detail.component";
import {AdminClubForm} from "./dashboard/clubs/club-form/club-form.component";
import {AdminProfessorForm} from "./dashboard/professors/professor-form/professor-form";
import {AdminInternshipDetail} from "./dashboard/internships/internship-detail.component";
import {AdminInternShipForm} from "./dashboard/internships/internship-form/internship-form.component";
import {AdminMemberDetail} from "./dashboard/team_members/member-detail.component";
import {AdminMemberForm} from "./dashboard/team_members/member-form/member-form.component";
import {AdminApplicationForm} from "./dashboard/application_templates/application-form/application-form.component";
import {AdminPostForm} from "./dashboard/posts/post-form/post-form.component";
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports:[ CommonModule,
        PaginationModule,
        CKEditorModule,
        DropdownModule,
        Ng2BootstrapModule,
        routing,
        SharedModule,

    ],
    declarations: [
        Login,
        Admin,
        AdminNavbar,
        Dashboard, 
        Sidebar,
        PostComponent,
        AdminApplicationTemplates,
        AdminApplicationSubmissions,
        AdminClubs,
        AdminApplicationTemplateDetail,
        AdminEvaluations,
        AdminInternships,
        AdminPosts,
        AdminTeamMembers,
        AdminProfessorDetail,
        AdminProfessors,
        AdminProfessorForm,
        AdminClubDetail,
        AdminClubForm,
        AdminInternshipDetail,
        AdminInternShipForm,
        AdminMemberDetail,
        AdminMemberForm,
        AdminApplicationForm,
        AdminPostForm
    ],

})
export class AdminModule { }
