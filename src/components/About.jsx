import { motion } from 'framer-motion';
import { LightBulbIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">About ShoresTech</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Dedicated to simplifying cloud operations and empowering businesses through modern DevOps practices
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="rounded-lg overflow-hidden shadow-xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white"
                    >
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="mb-6">
                            At ShoresTech, we're passionate about helping organizations harness the full potential of Kubernetes and cloud-native technologies. We believe that with the right DevOps approach, businesses of all sizes can achieve scalability, reliability, and agility.
                        </p>
                        <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
                        <p>
                            With years of experience in complex infrastructure environments, our team brings deep technical knowledge and practical solutions to every project. We specialize in Kubernetes orchestration, CI/CD pipelines, infrastructure automation, and cloud-native architectures.
                        </p>
                    </motion.div>

                    {/* Right column: Key points */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="space-y-8">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <LightBulbIcon className="h-10 w-10 text-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Solutions</h3>
                                    <p className="text-gray-600">
                                        We stay at the forefront of DevOps and cloud technologies, implementing cutting-edge solutions that drive efficiency and innovation.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <UserGroupIcon className="h-10 w-10 text-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Client Partnership</h3>
                                    <p className="text-gray-600">
                                        We work closely with your team, transferring knowledge and building capabilities that empower your organization for the long term.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <TrophyIcon className="h-10 w-10 text-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                                    <p className="text-gray-600">
                                        Our implementations have helped businesses reduce deployment times, increase system reliability, and optimize infrastructure costs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About; 