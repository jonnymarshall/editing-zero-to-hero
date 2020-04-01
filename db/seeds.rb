# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
course = Course.new(title: "Editing Zero To Hero", description: "Learn to Edit Like a Pro")
course.save!
section = Section.new(title: "Part 1", course: Course.first)
section.save!
episodes = [
  { title: "1 - Video One", description: "Lorem Ipsum", url: "https://www.youtube.com/embed/B0SxxHAImhc?list=PL3Bfn8Hb8i0-IBNPddnWkLoZjdtJh-6kL", section: section },
  { title: "2 - Video Two", description: "Lorem Ipsum", url: "https://www.youtube.com/embed/B0SxxHAImhc?list=PL3Bfn8Hb8i0-IBNPddnWkLoZjdtJh-6kL", section: section },
  { title: "3 - Video Three", description: "Lorem Ipsum", url: "https://www.youtube.com/embed/B0SxxHAImhc?list=PL3Bfn8Hb8i0-IBNPddnWkLoZjdtJh-6kL", section: section },
  { title: "4 - Video Four", description: "Lorem Ipsum", url: "https://www.youtube.com/embed/B0SxxHAImhc?list=PL3Bfn8Hb8i0-IBNPddnWkLoZjdtJh-6kL", section: section }
]
episodes.each do |episode|
  tmp = Episode.new(episode)
  tmp.save!
end