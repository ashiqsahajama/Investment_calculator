export default function UserInfo({onChange,userinfo}){
    return(
        <section id="user-input">
        <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" value={userinfo.initialInvestment} required onChange={(event)=>onChange('initialInvestment',event.target.value)}/>
          </p>
          <p>
          <label>Annual Investment</label>
          <input type="number" value={userinfo.annualInvestment} required onChange={(event)=>onChange('annualInvestment',event.target.value)}/>
          </p>
        </div>
        <div className="input-group">
        <p>
          <label>Expected Returns</label>
          <input type="number" value={userinfo.expectedReturn} required onChange={(event)=>onChange('expectedReturn',event.target.value)}/>
          </p>
          <p>
          <label>Duration</label>
          <input type="number" value={userinfo.duration} required onChange={(event)=>onChange('duration',event.target.value)}/>
          </p>
        </div>
        </section>
    );
}