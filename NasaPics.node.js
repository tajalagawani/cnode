"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NasaPics = void 0;
class NasaPics {
    constructor() {
        this.description = {
            displayName: 'NasaPics',
            name: 'nasaPics',
            icon: 'file:nasapics.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Get data from NASAs API',
            defaults: {
                name: 'NASA Pics',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'nasaApi',
                    required: true,
                },
            ],
            requestDefaults: {
                baseURL: 'https://api.nasa.gov',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
							{
									displayName: 'Resource',
									name: 'resource',
									type: 'options',
									noDataExpression: true,
									options: [
											{
													name: 'Jobs',
													value: 'jobs',
											},
											{
													name: 'Key Results',
													value: 'Key Results',
											},
											{
													name: 'Objectives',
													value: 'objectives',
											},
											{
												name: 'Users',
												value: 'users',
										 },
										 {
											name: 'Dashboards',
											value: 'dashboards',
									 },
									 {
										name: 'Dashboards',
										value: 'dashboards',
								 },
									],
									default: 'astronomyPictureOfTheDay',
							},
							// ... (existing properties for astronomyPictureOfTheDay and marsRoverPhotos)
							{
									displayName: 'Operation',
									name: 'operation',
									type: 'options',
									noDataExpression: true,
									displayOptions: {
											show: {
													resource: [
															'objectives',
													],
											},
									},
									options: [
											{
													name: 'Get Objectives Created By User',
													value: 'getObjectivesCreatedByUser',
													description: 'Get objectives created by user with IN_PROGRESS status',
													routing: {
															request: {
																	method: 'GET',
																	url: '={{$host}}/api/objectives/organizations/{{$parameter.organizationId}}/createdByUser?status=IN_PROGRESS',
															},
													},
											},
											{
													name: 'Get Objectives Invited To',
													value: 'getObjectivesInvitedTo',
													description: 'Get objectives user is invited to',
													routing: {
															request: {
																	method: 'GET',
																	url: '={{$host}}/api/objectives/organizations/{{$parameter.organizationId}}/invitedTo',
															},
													},
											},
											{
													name: 'Get Objective',
													value: 'getObjective',
													description: 'Get objective by ID',
													routing: {
															request: {
																	method: 'GET',
																	url: '={{$host}}/api/objectives/{{$parameter.objectiveId}}',
															},
													},
											},
											{
													name: 'Get Objective Test',
													value: 'getObjectiveTest',
													description: 'Get objective test by objective ID',
													routing: {
															request: {
																	method: 'GET',
																	url: '={{$host}}/api/objectives/{{$parameter.objectiveId}}/test',
															},
													},
											},
											{
													name: 'Get Objective Users',
													value: 'getObjectiveUsers',
													description: 'Get users for a specific objective',
													routing: {
															request: {
																	method: 'GET',
																	url: '={{$host}}/api/objectives/{{$parameter.objectiveId}}/users',
															},
													},
											},
											{
													name: 'Get Objective Invited Users',
													value: 'getObjectiveInvitedUsers',
													description: 'Get invited users for a specific objective',
													routing: {
															request: {
																	method: 'GET',
																	url: '={{$host}}/api/objectives/{{$parameter.objectiveId}}/invitedUsers',
															},
													},
											},
									],
									default: 'getObjectivesCreatedByUser',
							},
							{
									displayName: 'Organization ID',
									description: 'Organization ID for objectives',
									required: true,
									name: 'organizationId',
									type: 'string',
									default: '',
									displayOptions: {
											show: {
													resource: [
															'objectives',
													],
											},
									},
							},
							{
									displayName: 'Objective ID',
									description: 'Objective ID for the specific objective',


									required: true,
									name: 'objectiveId',
									type: 'string',
									default: '',


									displayOptions: {
											show: {
													resource: [
															'objectives',
													],
													operation: [
															'getObjective',
															'getObjectiveTest',
															'getObjectiveUsers',
															'getObjectiveInvitedUsers',
													],
											},
									},
							},
					],
        };
    }
}
exports.NasaPics = NasaPics;
//# sourceMappingURL=NasaPics.node.js.map
