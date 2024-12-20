
import './index.css';
import { Search, MapPin, Briefcase, Clock, Filter } from 'lucide-react'

function App() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <header className='sticky top-0 z-10 border-b bg-white'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4'>
          <div className='flex items-center gap-8'>
            <h1 className='text-xl font-bold'>Jobhub</h1>
            <nav className='hidden space-x-6 md:flex'>
              <a href="#" className='text-sm font-medium text-slate-600 hover:text-slate-900'>
                Find Jobs
              </a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                Companies
              </a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                Resources
              </a>
            </nav>
          </div>
          <div className='flex items-center gap-4'>
          <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Sign In</button>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Post a Job</button>
          
          </div>
        </div>
      </header>
      <main className='container mx-auto px-4 py-8'>
        <div className='mb-8'>
        <h2 className="mb-6 text-3xl font-bold">Find Your Next Remote Job</h2>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full rounded-md border border-slate-300 py-2 pl-10 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full rounded-md border border-slate-300 py-2 pl-10 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 md:w-32">Search</button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Filters</h3>
              <Filter className="h-5 w-5" />
            </div>
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-4 font-medium">Employment Type</h4>
                <div className="space-y-3">
                  {["Full-time", "Contract", "Part-time", "Internship"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <input type="checkbox" id={type} className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor={type} className="text-sm">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-4 font-medium">Experience Level</h4>
                <div className="space-y-3">
                  {["Entry Level", "Mid Level", "Senior Level", "Director"].map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <input type="checkbox" id={level} className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor={level} className="text-sm">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-4 font-medium">Sort By</h4>
                <select className="w-full rounded-md border border-slate-300 py-2 pl-3 pr-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Most Relevant</option>
                  <option>Most Recent</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                </select>
              </div>
            </div>
          </aside>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((job) => (
              <div key={job} className="rounded-lg border bg-white p-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-slate-200" />
                    <div>
                      <h3 className="font-semibold">Senior Software Engineer</h3>
                      <p className="text-sm text-slate-600">Company Name</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          <MapPin className="mr-1 h-3 w-3" /> Remote
                        </span>
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          <Briefcase className="mr-1 h-3 w-3" /> Full-time
                        </span>
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          <Clock className="mr-1 h-3 w-3" /> Posted 2 days ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Apply Now</button>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  We are looking for a Senior Software Engineer to join our team. You will be
                  responsible for developing and maintaining our core products...
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React", "Node.js", "TypeScript", "AWS"].map((skill) => (
                    <span key={skill} className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
