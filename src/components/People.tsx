import DisplayButton from "./DisplayButton";

const People = ({people}:{people:any}) => {
    return (
        <>
            <table className="w-full text-left border border-border rounded-lg overflow-hidden bg-card">
              <tbody>
                <tr className="border-b border-border">
                  <th className="py-2 px-4 font-semibold bg-muted w-40">Name</th>
                  <td className="py-2 px-4">{people.name}</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-2 px-4 font-semibold bg-muted">Height</th>
                  <td className="py-2 px-4">{people.height}</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-2 px-4 font-semibold bg-muted">Mass</th>
                  <td className="py-2 px-4">{people.mass}</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-2 px-4 font-semibold bg-muted">Hair Color</th>
                  <td className="py-2 px-4">{people.hair_color}</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-2 px-4 font-semibold bg-muted">Skin Color</th>
                  <td className="py-2 px-4">{people.skin_color}</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-2 px-4 font-semibold bg-muted">Eye Color</th>
                  <td className="py-2 px-4">{people.eye_color}</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-2 px-4 font-semibold bg-muted">Birth Year</th>
                  <td className="py-2 px-4">{people.birth_year}</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-2 px-4 font-semibold bg-muted">Gender</th>
                  <td className="py-2 px-4">{people.gender}</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-2 px-4 font-semibold bg-muted">Home World</th>
                  <td className="py-2 px-4">
                    <DisplayButton url={people.homeworld} />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-2 px-4 font-semibold bg-muted">Films</th>
                  <td className="py-2 px-4">
                    {people.films.map((data:string) => (
                        <DisplayButton url={data}/>
                    ))}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-2 px-4 font-semibold bg-muted">Species</th>
                  <td className="py-2 px-4">
                    {people.species.map((data:string) => (
                        <DisplayButton url={data}/>
                    ))}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-2 px-4 font-semibold bg-muted">Vehicles</th>
                  <td className="py-2 px-4">
                    {people.vehicles.map((data:string) => (
                        <DisplayButton url={data}/>
                    ))}
                  </td>
                </tr>
                <tr>
                  <th className="py-2 px-4 font-semibold bg-muted">Starships</th>
                  <td className="py-2 px-4">
                    {people.starships.map((data:string) => (
                        <DisplayButton url={data}/>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
        </>
    );
};

export default People;
