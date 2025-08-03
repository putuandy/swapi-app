export const fetchPeopleList = async () => {
  const res = await fetch(`https://swapi.info/api/people`)
  if (!res.ok) throw new Error('Failed to fetch people')
  return res.json()
}

export const fetchPeopleDetail = async (id:string) => {
  const res = await fetch(`https://swapi.info/api/people/${id}`)
  if (!res.ok) throw new Error('Failed to fetch people detail')
  return res.json()
}

export const fetchDataFromUrl = async (url:string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch people detail')
  return res.json()
}