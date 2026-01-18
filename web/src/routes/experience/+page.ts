// web/src/routes/experience/+page.ts
import yaml from 'js-yaml';
export const prerender = true;
import type { PageLoad } from './$types';

// Updated to point to YOUR repo
const yamlEndpoint = 'https://raw.githubusercontent.com/un1xr00t/cv/HEAD/resume.yml';

// You can either:
// 1. Create your own gist with additional job data
// 2. Or just use the YAML data alone (set jsonEndpoint to null)
// For now, I'm setting it to fetch from a local JSON file you can create
const jsonEndpoint = '/data/additional-data.json';

const formatForCompare = (str: string) => {
  if (!str) { return ''; }
  return str.toLowerCase().replace(/[^a-z0-9]/gi, '')
};

const mergeJobData = (cvData: any[], websiteData: any[]) => {
  // If no website data, just return CV data formatted
  if (!websiteData || websiteData.length === 0) {
    return cvData.map(cvJob => ({
      company: cvJob.name,
      position: cvJob.position,
      datesWorked: `${cvJob.startDate} - ${cvJob.endDate || 'Present'}`,
      highlights: cvJob.highlights,
      ...cvJob,
    }));
  }

  const formattedWebsiteData = websiteData.map(job => ({
    ...job,
    formattedCompany: formatForCompare(job.company),
  }));

  const combinedData = cvData.map(cvJob => {
    const formattedCvName = formatForCompare(cvJob.name);
    const matchingJob = formattedWebsiteData.find(webJob => webJob.formattedCompany === formattedCvName);

    if (matchingJob) {
      return {
        company: cvJob.name,
        companyUrl: matchingJob.companyUrl,
        companyLogo: matchingJob.companyLogo,
        position: cvJob.position,
        startDate: cvJob.startDate,
        endDate: cvJob.endDate,
        datesWorked: matchingJob.datesWorked,
        responsibilities: matchingJob.responsibilities,
        projectType: matchingJob.projectType,
        projects: matchingJob.projects,
        technologies: matchingJob.technologies,
        highlights: cvJob.highlights
      };
    }

    return {
      company: cvJob.name,
      datesWorked: `${cvJob.startDate} - ${cvJob.endDate || 'Present'}`,
      ...cvJob,
    };
  });

  const combinedCompanyNames = combinedData.map(job => formatForCompare(job.company));
  const additionalWebsiteJobs = formattedWebsiteData
    .filter(webJob => !combinedCompanyNames.includes(webJob.formattedCompany))
    .map(webJob => ({
      company: webJob.company,
      companyUrl: webJob.companyUrl,
      companyLogo: webJob.companyLogo,
      position: webJob.jobTitle,
      datesWorked: webJob.datesWorked,
      responsibilities: webJob.responsibilities,
      projectType: webJob.projectType,
      projects: webJob.projects,
      technologies: webJob.technologies
    }));

  return [...combinedData, ...additionalWebsiteJobs];
};

export const load: PageLoad = async ({ fetch }) => {
  // Fetch YAML from your repo
  const yamlResponse = await fetch(yamlEndpoint);
  const yamlText = await yamlResponse.text();
  const cvData = ((yaml.load(yamlText) as any) || {}).work || [];

  // Try to fetch additional JSON data, but don't fail if it doesn't exist
  let websiteData: any[] = [];
  try {
    const jsonResponse = await fetch(jsonEndpoint);
    if (jsonResponse.ok) {
      const jsonData = await jsonResponse.json();
      websiteData = jsonData.workExperience || [];
    }
  } catch (e) {
    // No additional data, that's fine - just use YAML
    console.log('No additional job data found, using resume.yml only');
  }

  const combinedJobData = mergeJobData(cvData, websiteData);

  return {
    combinedJobData
  };
};
