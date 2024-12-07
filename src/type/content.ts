export type Color = {
    color: string;
    spectrum: string;
    hue: string;
    percent: number;
    css3: string;
};
  
export type Image = {
    date: string | null;
    copyright: string | null;
    imageid: number;
    idsid: number;
    format: string;
    description: string | null;
    technique: string | null;
    renditionnumber: string;
    displayorder: number;
    baseimageurl: string;
    alttext: string | null;
    width: number;
    publiccaption: string | null;
    iiifbaseuri: string;
    height: number;
};
  
export type Person = {
    role: string;
    birthplace: string;
    gender: string;
    displaydate: string;
    prefix: string | null;
    culture: string;
    displayname: string;
    alphasort: string;
    name: string;
    personid: number;
    deathplace: string;
    displayorder: number;
};
  
export type Record = {
    copyright: string | null;
    contextualtextcount: number;
    creditline: string;
    accesslevel: number;
    dateoflastpageview: string | null;
    classificationid: number;
    division: string;
    markscount: number;
    publicationcount: number;
    totaluniquepageviews: number;
    contact: string;
    colorcount: number;
    rank: number;
    id: number;
    state: string | null;
    verificationleveldescription: string;
    period: string | null;
    images: Image[];
    worktypes: { worktypeid: string; worktype: string }[];
    imagecount: number;
    totalpageviews: number;
    accessionyear: number | null;
    standardreferencenumber: string | null;
    signed: string | null;
    classification: string;
    relatedcount: number;
    verificationlevel: number;
    primaryimageurl: string;
    titlescount: number;
    peoplecount: number;
    style: string | null;
    lastupdate: string;
    commentary: string | null;
    periodid: string | null;
    technique: string;
    edition: string | null;
    description: string | null;
    medium: string | null;
    lendingpermissionlevel: number;
    title: string;
    accessionmethod: string;
    colors: Color[];
    provenance: string | null;
    groupcount: number;
    dated: string;
    department: string;
    dateend: number;
    people: Person[];
    url: string;
    dateoffirstpageview: string | null;
    century: string;
    objectnumber: string;
    labeltext: string | null;
    datebegin: number;
    culture: string;
    exhibitioncount: number;
    imagepermissionlevel: number;
    mediacount: number;
    objectid: number;
    techniqueid: number;
    dimensions: string;
    seeAlso: { id: string; type: string; format: string; profile: string }[];
  };
  
export type Info = {
    totalrecordsperquery: number;
    totalrecords: number;
    pages: number;
    page: number;
    next: string;
    responsetime: string;
  };
  
export type MuseumData = {
    info: Info;
    records: Record[];
  };