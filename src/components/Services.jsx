import { motion } from 'framer-motion';
import { CloudArrowUpIcon, CogIcon, CommandLineIcon, ServerIcon } from '@heroicons/react/24/outline';

const services = [
    {
        title: "Kubernetes Consulting",
        description: "Expert guidance on container orchestration, cluster management, and Kubernetes architecture design. We help you scale your applications efficiently and securely.",
        icon: CloudArrowUpIcon
    },
    {
        title: "DevOps Implementation",
        description: "End-to-end DevOps solutions including CI/CD pipeline setup, infrastructure as code, and automated deployment strategies.",
        icon: CogIcon
    },
    {
        title: "Infrastructure Automation",
        description: "Streamline your operations with infrastructure automation using tools like Terraform, Ansible, and CloudFormation.",
        icon: ServerIcon
    },
    {
        title: "Cloud Native Solutions",
        description: "Modernize your applications with cloud-native architectures, microservices, and containerization strategies.",
        icon: CommandLineIcon
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600">
                        Comprehensive DevOps and Kubernetes solutions to accelerate your digital transformation
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services; 