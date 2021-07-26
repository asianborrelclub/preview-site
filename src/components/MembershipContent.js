import React, { Component } from "react";
import "./MembershipContent.scss";

const formData = new FormData();

function encode(data) {
  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

class MembershipContent extends Component {
  constructor(props) {
    super(props);
    this.state = { institution_status: "" };
  }

  handleRadio = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ institution_status: e.target.value });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    const form = e.target;

    fetch(`/.netlify/functions/mollie-int-membership`)
      .then((res) => {
        return res.json();
      })
      .then(
        fetch("/", {
          method: "POST",
          body: encode({
            "form-name": form.getAttribute("name"),
            ...this.state,
          }),
        })
      )
      .then((data) => {
        window.location = data.link;
        formData.append("mollie-id", data.id);
      })
      .catch((error) => console.log(error));
    e.preventDefault();
  };

  render() {
    const { institution_status } = this.state;
    return (
      <div className="membership-page">
        <div className="membership-info">
          <h1>Become a general member!</h1>
        </div>
        <form name="membership-form" method="post" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="membership-form" />
          <p hidden>
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <b>
              <label htmlFor="first-name">First name:</label>
            </b>
            <input
              type="text"
              name="first-name"
              id="first-name"
              required
              onChange={this.handleChange}
            />
          </p>
          <p>
            <b>
              <label htmlFor="last-name">Last name:</label>
            </b>
            <input
              type="text"
              name="last-name"
              id="last-name"
              required
              onChange={this.handleChange}
            />
          </p>
          <p>
            <b>
              <label htmlFor="email">E-mail:</label>
            </b>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={this.handleChange}
            />
          </p>
          <p>
            <b>
              <label htmlFor="dob">Date of birth:</label>
            </b>
            <input
              type="date"
              name="date-of-birth"
              id="dob"
              required
              onChange={this.handleChange}
            />
          </p>
          <div className="radio-gender">
            <b>
              <div>Gender:</div>
            </b>
            <p>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="male">Male</label>
            </p>
            <p>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="female">Female</label>
            </p>
            <p>
              <input
                type="radio"
                id="gender_other"
                name="gender"
                value="GENDER_OTHER_SELECTED"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="gender_other">Other</label>
            </p>
            <input
              type="text"
              name="gender_other"
              onChange={this.handleChange}
            />
          </div>
          <p>
            <b>
              <label htmlFor="tel">Phone number:</label>
            </b>
            <input
              type="tel"
              name="phone-number"
              id="tel"
              required
              onChange={this.handleChange}
            />
          </p>

          <div className="radio-institution">
            <b>
              <div>At which institution are you studying?</div>
            </b>
            <p>
              <input
                type="radio"
                id="uva"
                name="institution"
                value="Universiteit van Amsterdam"
                onChange={this.handleRadio}
                required
              />
              <label htmlFor="uva">University of Amsterdam</label>
            </p>

            <p>
              <input
                type="radio"
                id="vu"
                name="institution"
                value="Vrije Universiteit Amsterdam"
                onChange={this.handleRadio}
                required
              />
              <label htmlFor="vu">VU University Amsterdam</label>
            </p>
            <input
              type="radio"
              id="hva"
              name="institution"
              value="Hogeschool van Amsterdam"
              onChange={this.handleRadio}
              required
            />
            <label htmlFor="hva">
              Amsterdam University of Applied Sciences
            </label>
            <p>
              <input
                type="radio"
                id="institution_other"
                name="institution"
                value="INSTITUTION_OTHER_SELECTED"
                onChange={this.handleRadio}
                required
              />
              <label htmlFor="institution_other">Other</label>
            </p>
            <input
              type="text"
              list="institution_list"
              id="institution_other"
              name="institution_other"
              onChange={this.handleChange}
            />
            <datalist id="institution_list">
              <option value="Aeres Hogeschool" />
              <option value="Aeres VMBO en Aeres MBO" />
              <option value="Agrarisch Opleidingscentrum Terra" />
              <option value="Amsterdamse Hogeschool voor de Kunsten" />
              <option value="ArtEZ" />
              <option value="Avans Hogeschool" />
              <option value="BBO de Schalm" />
              <option value="Breda University of Applied Sciences" />
              <option value="Cibap Christelijk MBO" />
              <option value="Christelijke Hogeschool Ede" />
              <option value="Christelijke Hogeschool Windesheim" />
              <option value="CITAVERDE College" />
              <option value="Clusius College" />
              <option value="Codarts, Hogeschool voor de Kunsten" />
              <option value="Curio" />
              <option value="De Haagse Hogeschool" />
              <option value="Deltion College" />
              <option value="Design Academy Eindhoven" />
              <option value="Driestar educatief" />
              <option value="Erasmus Universiteit Rotterdam" />
              <option value="Fontys Hogescholen" />
              <option value="Gerrit Rietveld Academie" />
              <option value="Grafisch Lyceum Rotterdam voor MBO en VMBO" />
              <option value="Grafisch Lyceum Utrecht" />
              <option value="Hanzehogeschool Groningen" />
              <option value="HAS Hogeschool" />
              <option value="Helicon Opleidingen" />
              <option value="Hogeschool der Kunsten Den Haag" />
              <option value="Hogeschool INHOLLAND" />
              <option value="Hogeschool IPABO Amsterdam Alkmaar" />
              <option value="Hogeschool Leiden" />
              <option value="Hogeschool Rotterdam" />
              <option value="Hogeschool Thomas More" />
              <option value="Hogeschool Utrecht" />
              <option value="Hogeschool van Arnhem en Nijmegen" />
              <option value="Hogeschool Van Hall Larenstein" />
              <option value="Hogeschool voor de Kunsten Utrecht" />
              <option value="Hoornbeeck College voor Mbo op Reformatorische Grondslag" />
              <option value="Hotelschool The Hague" />
              <option value="Hout- en Meubileringscollege" />
              <option value="HZ University of Applied Sciences" />
              <option value="Iselinge Hogeschool" />
              <option value="Katholieke PABO Zwolle" />
              <option value="Koning Willem I College" />
              <option value="Landstede" />
              <option value="Leidse Instrumentmakers School" />
              <option value="Lentiz onderwijsgroep" />
              <option value="Marnix Academie" />
              <option value="mboRijnland" />
              <option value="NHL Stenden Hogeschool" />
              <option value="Nimeto Algemeen Bijzondere Scholengemeenschap voor Mbo Kmbo" />
              <option value="Nordwin College" />
              <option value="Open Universiteit Nederland" />
              <option value="Pedagogische Hogeschool De Kempel" />
              <option value="Protestantse Theologische Universiteit" />
              <option value="Radboud Universiteit Nijmegen" />
              <option value="Regio College voor Beroepsonderwijs en Educatie Zaanstreek-Waterland" />
              <option value="Regionaal Opleidingen Centrum A12" />
              <option value="Regionaal Opleidingen Centrum Alfa-college" />
              <option value="Regionaal Opleidingen Centrum Da Vinci College" />
              <option value="Regionaal Opleidingen Centrum Drenthe College" />
              <option value="Regionaal Opleidingen Centrum Friese Poort" />
              <option value="Regionaal Opleidingen Centrum Friesland College" />
              <option value="Regionaal Opleidingen Centrum Gilde Opleidingen Beroepsonderwijs en Educatie" />
              <option value="Regionaal Opleidingen Centrum Graafschap College" />
              <option value="Regionaal Opleidingen Centrum Horizon College" />
              <option value="Regionaal Opleidingen Centrum Kop van Noord-Holland voor VAVO MBO VW" />
              <option value="Regionaal Opleidingen Centrum Nijmegen eo" />
              <option value="Regionaal Opleidingen Centrum Nova College" />
              <option value="Regionaal Opleidingen Centrum Rijn IJssel" />
              <option value="Regionaal Opleidingen Centrum Rivor" />
              <option value="Regionaal Opleidingen Centrum Tilburg" />
              <option value="Regionaal Opleidingen Centrum van Flevoland" />
              <option value="Regionaal Opleidingencentrum van Twente" />
              <option value="Rijksuniversiteit Groningen" />
              <option value="ROC de Leijgraaf" />
              <option value="ROC Menso Alting" />
              <option value="ROC Mondriaan" />
              <option value="ROC TOP" />
              <option value="ROC van Amsterdam" />
              <option value="Saxion Hogeschool" />
              <option value="Scalda voor middelbaar beroepsonderwijs en volwasseneneducatie" />
              <option value="Scheepvaart en Transport College" />
              <option value="Scholengemeenschap De Rooi Pannen" />
              <option value="SiNTLUCAS" />
              <option value="SOMA College" />
              <option value="Stg ROC Summa College" />
              <option value="Stichting Albeda" />
              <option value="Stichting Hogeschool Viaa" />
              <option value="Stichting Interconfessioneel Beroepsonderwijs en Volwasseneneducatie Regio Amersfoort" />
              <option value="Stichting Interconfessioneel Beroepsonderwijs Volwasseneneducatie regio Utrecht" />
              <option value="Stichting Media Amsterdam" />
              <option value="Stichting Noorderpoort" />
              <option value="Stichting Regionaal Opleidingen Centrum AVENTUS" />
              <option value="Stichting Regionaal Opleidingencentrum Ter AA" />
              <option value="Stichting ROC Midden Nederland" />
              <option value="SVO Vakopleiding Food" />
              <option value="Technische Universiteit Delft" />
              <option value="Technische Universiteit Eindhoven" />
              <option value="Theologische Universiteit Apeldoorn" />
              <option value="Theologische Universiteit van de Gereformeerde Kerk (Vrijg) in Nederland" />
              <option value="Tilburg University" />
              <option value="Universiteit Leiden" />
              <option value="Universiteit Maastricht" />
              <option value="Universiteit Twente" />
              <option value="Universiteit Utrecht" />
              <option value="Universiteit voor Humanistiek" />
              <option value="VISTA College" />
              <option value="Wageningen University" />
              <option value="Wellant College" />
              <option value="Zadkine" />
              <option value="Zone College" />
              <option value="Zuyd Hogeschool" />
            </datalist>
          </div>
          {institution_status !== "" &&
          institution_status !== "INSTITUTION_OTHER_SELECTED" ? (
            <p>
              <b>
                <label htmlFor="student-number">Student number:</label>
              </b>
              <input
                type="text"
                name="student-number"
                id="student-number"
                required
                onChange={this.handleChange}
              />
            </p>
          ) : (
            ""
          )}
          <div className="radio-studyphase">
            <b>
              <div>Study phase:</div>
            </b>
            <p>
              <input
                type="radio"
                id="bachelor"
                name="study-phase"
                value="bachelor"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="bachelor">Bachelor</label>
            </p>
            <p>
              <input
                type="radio"
                id="premaster"
                name="study-phase"
                value="premaster"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="premaster">Pre-master</label>
            </p>
            <p>
              <input
                type="radio"
                id="master"
                name="study-phase"
                value="master"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="master">Master</label>
            </p>
            <p>
              <input
                type="radio"
                id="study-phase_other"
                name="study-phase"
                value="STUDY-PHASE_OTHER_SELECTED"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="study-phase_other">Other</label>
            </p>
            <input
              type="text"
              name="study-phase_other"
              onChange={this.handleChange}
            />
            <p className="terms-accept">
              <input
                type="checkbox"
                id="terms-accept"
                name="terms-accept"
                required
              />
              <label htmlFor="terms-accept">
                I accept the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/terms-and-conditions"
                >
                  Terms and Conditions
                </a>{" "}
                and the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
              </label>
            </p>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default MembershipContent;
