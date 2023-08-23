import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";
import { Button, Image } from 'react-bootstrap';
import DashboardHeader from "../components/DashboardHeader";
import SettingSidebar from "../components/SettingSidebar";
import UpdateAccountDetail from "../components/UpdateAccountDetail";
import UpdatePassword from "../components/UpdatePassword";
import { FiCamera, FiEdit } from 'react-icons/fi';

const clientData = [{
    name: "Abdulaziz",
    email: "abdulaziz@example.com",
    clientId: "1127363897",
    phoneNumber: "+966598370408",
    password: "admin12345",
}]

const TermCondition = () => {
    const [foldSidebar, setFoldSidebar] = useState(false);
    const [editProfile, setEditProfile] = useState(false);
    const className = foldSidebar ? 'sidebar-close' : '';
    return (
        <div className={`dashboardWrap ${className}`}>
            <Sidebar
                foldSidebar={foldSidebar}
                setFoldSidebar={setFoldSidebar}
            />
            <div className="dashboardContentWrap">
                <DashboardHeader
                    pageTitle="Setting"
                />
                <div className="dashboardContent">
                    <div className="settingWrap">
                        <h3>Term & Condition</h3>
                        <div className="settingRow">
                            <div className="settingSidebarCol">
                                <SettingSidebar />
                            </div>
                            <div className="settingContentCol">
                                <div className="termConditionCard">
                                    <h4>Nakla Company</h4>
                                    <p>Terms and conditions (T&C) are the legal agreements that govern the relationship between a user and a company, service, or product. They outline the rights and responsibilities of each party, including the terms of use, privacy policies, payment terms, warranties, and limitations of liability. T&C are often displayed on websites or apps and require users to agree to them before using the service or product. They are legally binding and can be enforced in a court of law. It is important for users to read and understand the T&C before agreeing to them to ensure that they are aware of their rights and obligation</p>
                                    <p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Table POP accessible at www.tablepop.com.</p>
                                    <p>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions. These Terms and Conditions have been generated with the help of the Terms And Conditiions Sample Generator. Minors or people below 18 years old are not allowed to use this Website</p>
                                    <h4>Lorem Ipsm Dolor Sit</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur. Gravida nunc lacus nulla sit nulla. Feugiat neque vitae auctor libero faucibus lacus elit. Nibh venenatis nibh aliquam mauris commodo fringilla. Mi pharetra a at eu malesuada arcu morbi. Ultrices quisque suspendisse amet vel. Felis tincidunt lacus tristique consectetur. Et arcu faucibus eu eget eget imperdiet dolor. Cras justo dolor viverra tincidunt feugiat et pellentesque mattis in. Facilisis nulla consectetur volutpat nulla. Elit eget consequat imperdiet in at phasellus sed ante viverra. Lectus ornare ultricies vitae proin sed suspendisse cursus gravida. Est nibh odio vulputate lorem accumsan tempor elementum. Id accumsan neque vitae ullamcorper scelerisque lobortis. Pretium nec suspendisse ac dui sit pulvinar. Pellentesque fringilla montes justo tellus. Vitae cursus natoque odio in. Eleifend elit pellentesque phasellus quam blandit. Ultricies erat est quis nec enim. Non diam nam imperdiet tortor in etiam. Aliquam adipiscing lectus non leo tortor phasellus consectetur massa mauris. Morbi nisi senectus ultricies dictum nam. Maecenas nec enim sollicitudin viverra id natoque id. Quis nulla donec ultrices purus felis sed. Mauris commodo consectetur nulla eu pretium senectus. Gravida pellentesque facilisis vestibulum elit amet sed maecenas habitasse. Pulvinar amet praesent molestie eget a. Cursus consequat vestibulum feugiat fermentum volutpat quis donec. Egestas fermentum sed faucibus in non praesent nibh at molestie. Eget nibh nunc turpis proin lectus purus elit quis enim. Condimentum nunc iaculis dui volutpat libero turpis nascetur. Nisl scrus arcu id facilisi amet.</p>
                                    <p>Porttitor posuere mus ultrices netus. Aliquam tincidunt sed tempus mauris malesuada eget neque. Turpis nec fringilla in in et. Justo aliquam pretium aliquet neque enim. Accumsan pretium diam id justo vitae tincidunt neque vel vel. Felis sit odio hac mauris aliquet diam. Malesuada sodales metus duis lacus pulvinar mattis viverra. Lacus proin neque feugiat consectetur. Imperdiet et nam odio egestas integer pulvinar at. Urna cursus mauris nullam in facilisi. In morbi eu blandit mauris dolor viverra. Tortor tellus eu nisi mus aliquet sit ullamcorper. Mauris mus nam blandit quisque.</p>
                                    <p>Morbi mauris cras risus pharetra odio felis. Elit ut morbi vivamus fringilla mi. Mattis porttitor malesuada id in id. Tortor quam volutpat nibh malesuada pellentesque. Pharetra arcu ipsum mi ac id cras tincidunt nunc. Fringilla eu elementum ipsum condimentum nulla. Id eu volutpat feugiat pretium. Sit vitae adipiscing quisque aliquam nulla at.</p>
                                    <p>Ornare in fames id tristique morbi neque sit dictum. Magna dis vel montes sed. Nisi cursus sociis et ac. Maecenas et imperdiet nunc nisl fusce nisl id ipsum augue. Sit neque neque in lacus platea ultrices quis lacinia nunc. Cras pharetra quis turpis nunc. Libero sit tristique suspendisse iaculis in proin. Diam urna ut malesuada viverra. Mi in massa elementum euismod quis massa ornare nunc. Dictum nec blandit adipiscing neque eu turpis amet maecenas. Curabitur sagittis et suspendisse pulvinar gravida. Turpis at porttitor metus sed. Dolor elementum enim in fermentum nec arcu feugiat massa tincidunt. Ultricies amet purus mauris tellus vitae morbi elit diam proin. Elit praesent sit eget risus ultrices phasellus. Enim nec convallis a proin.</p>
                                    <p>Morbi aliquam pellentesque aliquet malesuada in convallis vitae morbi. Augue odio mi duis mauris. Cras leo commodo eleifend purus. Vitae morbi adipiscing rhoncus dolor scelerisque posuere neque adipiscing. Commodo erat neque nisi adipiscing hac nulla odio sed rutrum. Arcu sed in nisl quis tellus suspendisse tristique. Et felis pretium nisl etiam amet consectetur purus faucibus. Praesent elementum phasellus praesent volutpat ornare mattis. Nulla adipiscing sed sit est feugiat aliquam. Integer dolor tellus.</p>
                                    <h4>Lorem Ipsm Dolor Sit</h4>
                                    <p>Porttitor posuere mus ultrices netus. Aliquam tincidunt sed tempus mauris malesuada eget neque. Turpis nec fringilla in in et. Justo aliquam pretium aliquet neque enim. Accumsan pretium diam id justo vitae tincidunt neque vel vel. Felis sit odio hac mauris aliquet diam. Malesuada sodales metus duis lacus pulvinar mattis viverra. Lacus proin neque feugiat consectetur. Imperdiet et nam odio egestas integer pulvinar at. Urna cursus mauris nullam in facilisi. In morbi eu blandit mauris dolor viverra. Tortor tellus eu nisi mus aliquet sit ullamcorper. Mauris mus nam blandit quisque.</p>
                                    <p>Morbi mauris cras risus pharetra odio felis. Elit ut morbi vivamus fringilla mi. Mattis porttitor malesuada id in id. Tortor quam volutpat nibh malesuada pellentesque. Pharetra arcu ipsum mi ac id cras tincidunt nunc. Fringilla eu elementum ipsum condimentum nulla. Id eu volutpat feugiat pretium. Sit vitae adipiscing quisque aliquam nulla at.</p>
                                    <p>Ornare in fames id tristique morbi neque sit dictum. Magna dis vel montes sed. Nisi cursus sociis et ac. Maecenas et imperdiet nunc nisl fusce nisl id ipsum augue. Sit neque neque in lacus platea ultrices quis lacinia nunc. Cras pharetra quis turpis nunc. Libero sit tristique suspendisse iaculis in proin. Diam urna ut malesuada viverra. Mi in massa elementum euismod quis massa ornare nunc. Dictum nec blandit adipiscing neque eu turpis amet maecenas. Curabitur sagittis et suspendisse pulvinar gravida. Turpis at porttitor metus sed. Dolor elementum enim in fermentum nec arcu feugiat massa tincidunt. Ultricies amet purus mauris tellus vitae morbi elit diam proin. Elit praesent sit eget risus ultrices phasellus. Enim nec convallis a proin.</p>
                                    <h4>Lorem Ipsm Dolor Sit</h4>
                                    <p>Porttitor posuere mus ultrices netus. Aliquam tincidunt sed tempus mauris malesuada eget neque. Turpis nec fringilla in in et. Justo aliquam pretium aliquet neque enim. Accumsan pretium diam id justo vitae tincidunt neque vel vel. Felis sit odio hac mauris aliquet diam. Malesuada sodales metus duis lacus pulvinar mattis viverra. Lacus proin neque feugiat consectetur. Imperdiet et nam odio egestas integer pulvinar at. Urna cursus mauris nullam in facilisi. In morbi eu blandit mauris dolor viverra. Tortor tellus eu nisi mus aliquet sit ullamcorper. Mauris mus nam blandit quisque.</p>
                                    <p>Morbi mauris cras risus pharetra odio felis. Elit ut morbi vivamus fringilla mi. Mattis porttitor malesuada id in id. Tortor quam volutpat nibh malesuada pellentesque. Pharetra arcu ipsum mi ac id cras tincidunt nunc. Fringilla eu elementum ipsum condimentum nulla. Id eu volutpat feugiat pretium. Sit vitae adipiscing quisque aliquam nulla at.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermCondition