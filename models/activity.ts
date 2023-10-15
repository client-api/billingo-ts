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
import { Comment } from './comment';
// May contain unused imports in some cases
// @ts-ignore
import { Repository } from './repository';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * 
 * @export
 * @interface Activity
 */
export interface Activity {
    /**
     * 
     * @type {User}
     * @memberof Activity
     */
    'act_user'?: User;
    /**
     * 
     * @type {number}
     * @memberof Activity
     */
    'act_user_id'?: number;
    /**
     * 
     * @type {Comment}
     * @memberof Activity
     */
    'comment'?: Comment;
    /**
     * 
     * @type {number}
     * @memberof Activity
     */
    'comment_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Activity
     */
    'content'?: string;
    /**
     * 
     * @type {string}
     * @memberof Activity
     */
    'created'?: string;
    /**
     * 
     * @type {number}
     * @memberof Activity
     */
    'id'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Activity
     */
    'is_private'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Activity
     */
    'op_type'?: string;
    /**
     * 
     * @type {string}
     * @memberof Activity
     */
    'ref_name'?: string;
    /**
     * 
     * @type {Repository}
     * @memberof Activity
     */
    'repo'?: Repository;
    /**
     * 
     * @type {number}
     * @memberof Activity
     */
    'repo_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof Activity
     */
    'user_id'?: number;
}

