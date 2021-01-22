/* tslint:disable */

/**
 * A file holding all attachments
 */
export interface AttachmentFileDto {
  _type: string;

  /**
   * The number of attachments in this file.<br><br> Considers attachments except the ones of the categories<br> <ul><br> <li>AttachmentCategory.THUMBNAIL_IMAGE</li><br> <li>AttachmentCategory.COMPANY_LOGO<br> </ul>
   */
  attachmentCount: number;
  id?: number;

  /**
   * 'true' if this file is not modifiable
   */
  sealed: boolean;

  /**
   * A version number used for internal purposes (object locking). Always leave<br> this number as it is.
   */
  version?: number;
}
