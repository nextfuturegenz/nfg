import { useRecoilValue, useSetRecoilState } from "recoil";
import { onboardingAtom, organisationAtom, authAtom } from "../../../../atoms";
import { Card } from "../../../../components";
import { auth, db } from "../../../../firestore";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Global } from "../../../../components/icons";
import { doc, updateDoc, collection, addDoc } from "firebase/firestore";

export const OrganisationONBD = () => {
    const authUser = useRecoilValue(authAtom);
    const setOnboarding = useSetRecoilState(onboardingAtom);
    const setOrganisation = useSetRecoilState(organisationAtom);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        busniessName: yup.string().required(),
        legalName: yup.string().required(),
        type: yup.string().required(),
        address: yup.string().required(),
        services: yup.string(),
        size: yup.string().required(),
        industry: yup.string().required(),
        multiBrands: yup.boolean().required(),
        multiNational: yup.boolean().required(),
        website: yup.string(),
        social: yup.string(),
        phoneNumber: yup.number().required(),
    }).required();

    const onError = (errors) => {
        console.error(errors);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const completeOnboarding = async ({ busniessName,
        legalName,
        type,
        address,
        services,
        size,
        industry,
        multiBrands,
        multiNational,
        website,
        social,
        phoneNumber }) => {
        // we have to update user document in firestore also
        // then setObording step 1 completed 
        // then move to next step 

        // create organisation and update Organization atom 
        // update user doc 

        try {
            const organisationDoc = {
                busniessName,
                legalName,
                type,
                address,
                services,
                ownerId : authUser.uid,
                size,
                industry,
                multiBrands,
                multiNational,
                website,
                social,
                phoneNumber
            }

            const orgRef = await addDoc(collection(db, "organisation"),organisationDoc);
            setOrganisation(organisationDoc);
            const userRef = doc(db, 'users', auth.currentUser.uid);
            const res = await updateDoc(userRef, {
                onboardingCompleted: true,
                organisationId: orgRef.id
            });
            setOnboarding({
                onboardingCompleted: true
            })
            navigate('/app/dashboard')

        } catch (error) {
            console.log("error ", error)
        }
    }

    return (
        <div>
            <Card header={'Organization on boarding'} customStyle={{ width: '100vh' }} defaultValue={false}>
                <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(completeOnboarding, onError)}>
                    <div className="form-group">
                        <input type="text" name='busniessName' className="form-control" {...register('busniessName')} placeholder="Your Business/Brand Name" />
                        {errors.busniessName && <p>{errors.busniessName.message}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" name='legalName' className="form-control" {...register('legalName')} placeholder="Your Business Legal Name" />
                        {errors.legalName && <p>{errors.legalName.message}</p>}
                    </div>
                    <div className="form-group">
                        <input type="number" name='phoneNumber' className="form-control" {...register('phoneNumber')} placeholder="Your Business Phone Number" />
                        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                    </div>
                    <div className="form-group">
                        <select defaultValue={'default'} className="form-control" name="type" {...register('type')}>
                            <option disabled value="default">Select Your Business Type</option>
                            <option value="gov">Govt</option>
                            <option value="nop">Non-profit</option>
                            <option value="pvt">Private</option>
                        </select>
                        {errors.type && <p>{errors.type.message}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" name='address' className="form-control" {...register('address')} placeholder="Your Busness Address" />
                        {errors.address && <p>{errors.address.message}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" name='services' className="form-control" {...register('services')} placeholder="Your Service or Sector" />
                        {errors.services && <p>{errors.services.message}</p>}
                    </div>
                    <div className="form-group">
                        <input disabled type="text" name='ownerId' className="form-control" value={authUser.email} placeholder="Owner Email" />
                    </div>
                    <div className="form-group">
                        <select defaultValue={'default'} className="form-control" name="type" {...register('size')}>
                            <option disabled value="default">Select Your Team Size</option>
                            <option value="1">Lone Wolf (1)</option>
                            <option value="2">Bootstrap Team (0-5)</option>
                            <option value="3">Startup (5-20)</option>
                            <option value="4">Corporate (20-50)</option>
                            <option value="5">Organization (50+)</option>
                        </select>
                        {errors.size && <p>{errors.size.message}</p>}
                    </div>
                    <div className="form-group">
                        <select defaultValue={'default'} className="form-control" name="type" {...register('industry')}>
                            <option disabled value="default">Select Your Industry</option>
                            <option value="Information Technology (IT)">Information Technology (IT)</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Finance">Finance</option>
                            <option value="Education">Education</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Energy">Energy</option>
                            <option value="Retail">Retail</option>
                            <option value="Hospitality and Tourism">Hospitality and Tourism</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Telecommunications">Telecommunications</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Consumer Electronics">Consumer Electronics</option>
                            <option value="Pharmaceuticals">Pharmaceuticals</option>
                            <option value="Health and Wellness">Health and Wellness</option>
                            <option value="Environmental Services">Environmental Services</option>
                            <option value="Legal Services">Legal Services</option>
                            <option value="Marketing and Advertising">Marketing and Advertising</option>
                            <option value="Fashion and Apparel">Fashion and Apparel</option>
                            <option value="Food and Beverage">Food and Beverage</option>
                            <option value="Nonprofit and Charity">Nonprofit and Charity</option>
                            <option value="Government">Government</option>
                            <option value="Media and Publishing">Media and Publishing</option>
                            <option value="Biotechnology">Biotechnology</option>
                            <option value="Construction">Construction</option>
                            <option value="Mining and Minerals">Mining and Minerals</option>
                            <option value="Art and Culture">Art and Culture</option>
                            <option value="Aviation">Aviation</option>
                            <option value="Chemical Industry">Chemical Industry</option>
                            <option value="Renewable Energy">Renewable Energy</option>
                            <option value="Space and Aerospace">Space and Aerospace</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="Artificial Intelligence (AI) and Robotics">Artificial Intelligence (AI) and Robotics</option>
                            <option value="Biomedical Devices">Biomedical Devices</option>
                            <option value="Gaming and Esports">Gaming and Esports</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="Cannabis Industry">Cannabis Industry</option>
                            <option value="Waste Management">Waste Management</option>
                            <option value="Maritime">Maritime</option>
                            <option value="Fitness and Sports">Fitness and Sports</option>
                            <option value="Renovation and Home Improvement">Renovation and Home Improvement</option>
                            <option value="Insurance Technology (Insurtech)">Insurance Technology (Insurtech)</option>
                            <option value="Education Technology (Edtech)">Education Technology (Edtech)</option>
                            <option value="Blockchain and Cryptocurrency">Blockchain and Cryptocurrency</option>
                            <option value="Sustainable and Green Technologies">Sustainable and Green Technologies</option>
                            <option value="Home Automation">Home Automation</option>
                            <option value="Music Streaming">Music Streaming</option>
                            <option value="Virtual Reality (VR) and Augmented Reality (AR)">Virtual Reality (VR) and Augmented Reality (AR)</option>
                        </select>
                        {errors.industry && <p>{errors.industry.message}</p>}
                    </div>
                    <div className="form-group">
                        <select defaultValue={'default'} className="form-control" name="type" {...register('multiNational')}>
                            <option disabled value="default">Are you a Multi National Organisation ?</option>
                            <option value={true}>Yes</option>
                            <option value={false}>no</option>
                        </select>
                        {errors.multiNational && <p>{errors.multiNational.message}</p>}
                    </div>
                    <div className="form-group">
                        <select defaultValue={'default'} className="form-control" name="type" {...register('multiBrands')}>
                            <option disabled value="default">Are you a multi brand owner ?</option>
                            <option value={true}>Yes</option>
                            <option value={false}>no</option>
                        </select>
                        {errors.multiBrands && <p>{errors.multiBrands.message}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" name='website' className="form-control" {...register('website')} placeholder="Your Business website url" />
                        {errors.website && <p>{errors.website.message}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" name='Display Name' className="form-control" {...register('social')} placeholder="Your Social url" />
                        {errors.social && <p>{errors.social.message}</p>}
                    </div>

                    <div className="form-group" style={{ textAlign: 'center', border: 'thin solid black' }}>
                        <label htmlFor="inputTag">
                            <br />Select Brand Image <br />
                            <Global size={40} ></Global>
                            <input style={{ display: "none" }} id="inputTag" type="file" />
                        </label>
                    </div>
                    <button style={{ marginLeft: '10px' }} type="submit" className="btn btn-primary">Update Info</button>
                </form>
            </Card>

        </div>
    )
}