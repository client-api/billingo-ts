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
 * CreateBranchProtectionOption options for creating a branch protection
 * @export
 * @interface CreateBranchProtectionOption
 */
export interface CreateBranchProtectionOption {
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    'approvals_whitelist_teams'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    'approvals_whitelist_username'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    'block_on_official_review_requests'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    'block_on_outdated_branch'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    'block_on_rejected_reviews'?: boolean;
    /**
     * Deprecated: true
     * @type {string}
     * @memberof CreateBranchProtectionOption
     */
    'branch_name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    'dismiss_stale_approvals'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    'enable_approvals_whitelist'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    'enable_merge_whitelist'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    'enable_push'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    'enable_push_whitelist'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    'enable_status_check'?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    'merge_whitelist_teams'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    'merge_whitelist_usernames'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateBranchProtectionOption
     */
    'protected_file_patterns'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    'push_whitelist_deploy_keys'?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    'push_whitelist_teams'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    'push_whitelist_usernames'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    'require_signed_commits'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreateBranchProtectionOption
     */
    'required_approvals'?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateBranchProtectionOption
     */
    'rule_name'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    'status_check_contexts'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateBranchProtectionOption
     */
    'unprotected_file_patterns'?: string;
}

