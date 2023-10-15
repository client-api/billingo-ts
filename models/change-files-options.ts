/* tslint:disable */
/* eslint-disable */
/**
 * Forgejo API.
 * This documentation describes the Forgejo API.
 *
 * The version of the OpenAPI document: 1.20.5+0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ChangeFileOperation } from './change-file-operation';
// May contain unused imports in some cases
// @ts-ignore
import { CommitDateOptions } from './commit-date-options';
// May contain unused imports in some cases
// @ts-ignore
import { Identity } from './identity';

/**
 * ChangeFilesOptions options for creating, updating or deleting multiple files Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
 * @export
 * @interface ChangeFilesOptions
 */
export interface ChangeFilesOptions {
    /**
     * list of file operations
     * @type {Array<ChangeFileOperation>}
     * @memberof ChangeFilesOptions
     */
    'files': Array<ChangeFileOperation>;
    /**
     * 
     * @type {Identity}
     * @memberof ChangeFilesOptions
     */
    'author'?: Identity;
    /**
     * branch (optional) to base this file from. if not given, the default branch is used
     * @type {string}
     * @memberof ChangeFilesOptions
     */
    'branch'?: string;
    /**
     * 
     * @type {Identity}
     * @memberof ChangeFilesOptions
     */
    'committer'?: Identity;
    /**
     * 
     * @type {CommitDateOptions}
     * @memberof ChangeFilesOptions
     */
    'dates'?: CommitDateOptions;
    /**
     * message (optional) for the commit of this file. if not supplied, a default message will be used
     * @type {string}
     * @memberof ChangeFilesOptions
     */
    'message'?: string;
    /**
     * new_branch (optional) will make a new branch from `branch` before creating the file
     * @type {string}
     * @memberof ChangeFilesOptions
     */
    'new_branch'?: string;
    /**
     * Add a Signed-off-by trailer by the committer at the end of the commit log message.
     * @type {boolean}
     * @memberof ChangeFilesOptions
     */
    'signoff'?: boolean;
}

