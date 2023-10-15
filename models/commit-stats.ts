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



/**
 * CommitStats is statistics for a RepoCommit
 * @export
 * @interface CommitStats
 */
export interface CommitStats {
    /**
     * 
     * @type {number}
     * @memberof CommitStats
     */
    'additions'?: number;
    /**
     * 
     * @type {number}
     * @memberof CommitStats
     */
    'deletions'?: number;
    /**
     * 
     * @type {number}
     * @memberof CommitStats
     */
    'total'?: number;
}

