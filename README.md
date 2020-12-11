# Steedos project management system

<center>
<a href="https://github.com/steedos/project-management-app/blob/master/README_cn.md">  中文 </a>
/
<a href="https://github.com/steedos/project-management-app">  English </a>
</center>

Help you track and manage projects, milestones, tasks, blocked tasks, overdue tasks, time, cost budget, and has detailed reporting functions. The system is based on Steedos Platform and metadata driven, which can be quickly customized.

![project](/docs/images-10/project.png)

## System function

- Project set： Centralized management of all projects, a project may or may not belong to a project set, but any project set must contain projects. In the project set, you can directly see the running status of all projects.
- Project: For all the specific projects in the project set, the running status of each project can be visually previewed. If there are many projects, you can use the filter function to quickly search.
- Milepost: Milestones are usually set in the planning phase of a project and are updated as the project progresses. They are visual reference points, which can decompose the project into manageable and controllable phases to create orderly nodes to help project managers and teams anchor projects.
- Project tasks: Project task management needs to manage the distribution, real-time response and progress update of multiple project tasks at the same time; record the required resources, estimated and actual work hours, associated documents and related issues of each task; at the same time, it can track the real-time progress and status of tasks, and reflect the change history of tasks.
- Time spent: The total time from the occurrence to the end of a project can be directly related to a specific project. Compare the actual time consumption with the planned time, and analyze the reasons.
- Cost: Almost every project will generate corresponding expenses, which can be directly related to specific tasks, so as to facilitate the later query of the cost details of each project.
- Meeting: Each project will have a corresponding meeting. After determining the meeting theme, you can directly select to associate it to a project.
- Issue: When you create a new issue, you can set the priority of the problem because multiple problems may occur in the same period of time.
- Log: Each project in progress or after the end, can quickly create a log, in order to effectively control each project.

## About  Steedos Platform

About  Steedos Platform
Steedos Platform is a visual modeling and descriptive programming development tool. The design goal is to lower the threshold of application construction so that everyone can participate in the development. The system has built-in data modeling and a series of automatic tools, including validation rules, public computing, workflow rules, automatic operation, approval process, report engine and so on.
For example, the system needs to manage projects, milestones, tasks, problems, time, costs, etc. in Huayan Rubik's cube, we can build the required objects and fields through visual modeling tools, for example, we can set the name, expiration date and status of the task, which can be configured in a few days by clicking the mouse.


[Steedos Platform ](https://www.steedos.com/help/)

## Requirements

- [Node.js](https://nodejs.org/en/download/) version >= 10.15.1 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed
- [Yarn](https://yarnpkg.com/en/) version >= 1.5 (which can be checked by running `yarn version`). Yarn is a performant package manager for JavaScript and replaces the `npm` client. It is not strictly necessary but highly encouraged.


## Project structure

```sh
project-management-app
├── steedos-app/main/default
│   ├── applications
│   │   └── project.app.yml
│   └── objects
│       └── project
│           ├── fields
│           │   └── name.field.yml
│           │   └── description.field.yml
│           │   └── isDone.field.yml
│           │   └── ...
│           ├── listviews
│           │   └── all.listview.yml
│           │   └── recent.listview.yml
│           ├── permissions
│           │   └── user.permission.yml
│           │   └── admin.permission.yml
│           └── todo.object.yml
│       └── ...
│   └── ...
├── .env
├── .gitignore
├── package.json
├── README.md
├── server.js
├── steedos-config.yml
└── yarn.lock
```

## Project operation

The source code of the project depends on nodejs environment. To use mongodb database, the corresponding running environment should be deployed first.

  1. Start the database  
  2. Install dependent packages
  3. Running project
  4. Using browser access `http://127.0.0.1:5000/`    For the first time, the database is empty. You need to register an account and choose to create an enterprise.

