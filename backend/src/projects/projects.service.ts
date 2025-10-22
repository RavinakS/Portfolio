import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './schemas/project.schema';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }

  async create(dto: CreateProjectDto): Promise<Project> {
    const newProject = new this.projectModel(dto);
    return newProject.save();
  }
}
