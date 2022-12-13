import imageData from '../schema/data/images.json';
import contactData from '../schema/data/contacts.json';
import gdriveData from '../schema/data/gdrive.json';
import slackData from '../schema/data/slacks.json';
import twitterData from '../schema/data/tweets.json';

/**
 * Merge Local data from JSON
 * @returns array
 */
async function allDataMerger(){
  return [imageData, contactData, gdriveData, slackData, twitterData]
}

export {allDataMerger}