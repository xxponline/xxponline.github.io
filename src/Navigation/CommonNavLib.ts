export function GoSectionViewCenter(sectionId: string)
{
    document.querySelector(sectionId)?.scrollIntoView({block: "center", behavior: 'smooth'});
}

export function GoSectionViewStart(sectionId: string)
{
    document.querySelector(sectionId)?.scrollIntoView({block: "start", behavior: 'smooth'});
}